import { Component, OnInit, TemplateRef, ViewChild, ElementRef, HostListener } from '@angular/core';
import { BuildServiceService } from '../services/build-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Message } from './message';


@Component({
  selector: 'td-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  message: string;
  messages: Message[] = [];
  private url = 'http://localhost:3000';

  @ViewChild('content', {static: true}) mymodal: ElementRef;
  @ViewChild('content2', {static: true}) mymodal2: ElementRef;

  private socket; 
  tab = [];
  toogled = true;
  isChecked = true;
  displayresult: boolean = false;
  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.close()
    }
  }
  constructor( private modalService: NgbModal ) {  
    this.socket = io(this.url);
    this.isChecked = true;

    

  }

  
  shouldADD() {
    console.log('activé ?');
    this.socket.emit('shouldAdd', this.isChecked);
    this.isChecked = !this.isChecked;
  }
  
  closeResult2(){
    this.modalService.dismissAll();
  }
 

  public sendMessage() {
   this.socket.emit('getAll', 'HELLO');
   this.socket.on('getAll', (message) => {
    this.tab = JSON.parse(message.message);
    console.log('tableau ', this.tab);
  });
   this.socket.emit('sending message', this.message);
   this.message = '';
  }
  
  fillMessages(msg: any) {
    console.log('fill ', msg.message);

    if(msg.message.includes('==>')) {
      this.messages.push({
        server: true,
        serverMessage: msg.message
    
      });
    } else { 
      this.messages.push({
        server: false,
        serverMessage: msg.message
    
      });
    }
  }

 
 getMessage() {
   //return this.socket
     //  .fromEvent("new message") ;
     return Observable.create((observer) => {
       this.socket.on('new message', (message) => {
         this.fillMessages(message);
           observer.next(message);
       });
       this.socket.emit('getAll', 'HELLO');
       this.socket.on('getAll', (message) => {
        this.tab = JSON.parse(message.message);
        console.log('tableau ', this.tab);
      });
   });

 } 


  getTypeText(mtext: string) {
    if( mtext.includes('PLEASE GIVE') || mtext.includes('errors') || mtext.includes('ADDED SUCCESSFULLY')  ){
     
      return true;
    }
    else{
      return false;
    }
 }

  toggleDarkTheme() {
    this.toogled = ! this.toogled;
  }

  ngOnInit() {
    this.getMessage().subscribe((message: string) => {
     // this.messages.push(message);

    });
    this.toogled = true;

    this.open(this.mymodal);
  }
  closeResult: string;

  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.socket.emit('shouldAdd', this.isChecked);
    });
  }

  


  close() {
    this.mymodal2.nativeElement.modal("hide");
}


}
