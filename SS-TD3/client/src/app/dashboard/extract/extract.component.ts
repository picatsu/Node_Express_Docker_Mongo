import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BuildServiceService } from '../services/build-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'td-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  message: string;
  messages: string[] = [];
  private url = 'http://localhost:3000';

  @ViewChild('content', {static: true}) mymodal: ElementRef;

  private socket; 
  tab = [];
  toogled = true;
  isChecked = true;


  constructor( private modalService: NgbModal ) {  
    this.socket = io(this.url);
    
    
  
   this.isChecked = true;

  }

  
  shouldADD() {
    console.log('activé ?');
    this.socket.emit('shouldAdd', this.isChecked);
    this.isChecked = !this.isChecked;
  }
  
 

  public sendMessage() {
   console.log('XXXXXCONSOLE LOG ', this.message);

   this.socket.emit('sending message', this.message);
   this.message = '';
  }
  

 
 getMessage() {
   //return this.socket
     //  .fromEvent("new message") ;
     return Observable.create((observer) => {
       this.socket.on('new message', (message) => {
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
    if(mtext.includes('said') || mtext.includes('PLEASE GIVE') || mtext.includes('errors') || mtext.includes('ADDED SUCCESSFULLY')  ){
      return 'success';
    }
    else{
      return 'danger';
    }
 }

  toggleDarkTheme() {
    this.toogled = ! this.toogled;
  }

  ngOnInit() {
    this.getMessage().subscribe((message: string) => {
      this.messages.push(message);

    });
    this.toogled = true;
    console.log(" LLL", this.mymodal);

    this.open(this.mymodal);
  }
  closeResult: string;

  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.socket.emit('shouldAdd', this.isChecked);
    });
  }

 
  


}
