import { Component, OnInit, TemplateRef, ViewChild, ElementRef, HostListener, AfterViewInit, AfterViewChecked } from '@angular/core';
import { BuildServiceService } from '../services/build-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Message } from './message';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'td-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
  providers: [ DatePipe ]
})
export class ExtractComponent implements OnInit, AfterViewChecked  {
  message: string;
  messages: Message[] = [];
  now: Date = new Date();
  private url = 'http://localhost:3000';
  @ViewChild('scrollMe', {static: true}) private myScrollContainer: ElementRef;
  @ViewChild('content', {static: true}) mymodal: ElementRef;
  @ViewChild('content2', {static: true}) mymodal2: ElementRef;

  private socket; 
  tab = [];
  toogled = true;
  isChecked = true;
  searchKeyword: any;
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
    this.socket.emit('shouldAdd', this.isChecked);
    this.isChecked = !this.isChecked;
  }
  
  closeResult2(){
    this.modalService.dismissAll();
  }
 
 
ngAfterViewChecked() {        
    this.scrollToBottom();        
} 

scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
}
  public sendMessage() {
   this.socket.emit('getAll', 'HELLO');
   this.socket.on('getAll', (message) => {
    this.tab = JSON.parse(message.message);
  });
   this.socket.emit('sending message', this.message);
   //this.socket.on('sending message', this.message);
   console.log('sendMessage() => ', this.message );
   this.message = '';
  
  }
  clearChat(){
    this.messages.splice(0,this.messages.length);
    this.messages.push({
      server: true,
      serverMessage: 'Donne ton',
      date: new Date()
  
    });
  }
  fillMessages(msg: any) {
    console.log('fillMessages() => ', msg.message);

    if(msg.message.includes('==>')) {
      this.messages.push({
        server: true,
        serverMessage: msg.message,
        date: new Date()
    
      });
    } else { 
      this.messages.push({
        server: false,
        serverMessage: msg.message,
        date: new Date()

    
      });
    }
  }

 
 getMessage() {
   //return this.socket
     //  .fromEvent("new message") ;
     return Observable.create((observer) => {
       this.socket.on('new message', (message) => {
           observer.next(message);
           console.log('getMessage() => ', message);
       });
       this.socket.emit('getAll', 'HELLO');
       this.socket.on('getAll', (message) => {
        this.tab = JSON.parse(message.message);
      });
   });

 } 


  getTypeText(mtext: string) {
    if( mtext.includes('PLEASE GIVE') || mtext.includes('errors') || mtext.includes('ADDED SUCCESSFULLY') || mtext.includes('ECONNREFUSED')  ){
      // console.log('mtext', mtext);
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
     this.fillMessages(message);

    });
    this.toogled = true;

    this.open(this.mymodal);
    this.scrollToBottom();

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
