import { Component, OnInit, TemplateRef, ViewChild, ElementRef, HostListener, AfterViewInit, AfterViewChecked, Input } from '@angular/core';
import { BuildServiceService } from '../services/build-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Message } from './message';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


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
      server: false,
      serverMessage: 'Donne ton birthname',
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

    this.updateTable();
  
  }

  deleteRow(ssn: string){
  this.socket.emit('deleteLigne', ssn);
    this.socket.on('deleteLigne', (message) => {
     /// AFFICHAGE TOAST 
   });
   
   console.log('je supprime sa :', ssn);
   this.updateTable();
  }

  updateTable(){
    this.socket.emit('getAll', 'HELLO');
    this.socket.on('getAll', (message) => {
    this.tab = JSON.parse(message.message);
   });
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


  getTypeText(mtext: string): boolean {
    if( mtext.includes('PLEASE GIVE') || mtext.includes('errors') || mtext.includes('ADDED SUCCESSFULLY') || mtext.includes('ECONNREFUSED')  ){
      // console.log('mtext', mtext);
      this.displayresult= true;
      this.modalService.open(this.mymodal2, { size: 'xl' });
        return true;
    }
    else{
      return false;
    }
 }

  toggleDarkTheme() {
    this.toogled = ! this.toogled;
  }

  openXl(content) {
    this.modalService.open(this.mymodal2, { size: 'xl' });
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



  downloadCsv(){
    var options = { 
      fieldSeparator: ';',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      useBom: true,
      headers: ['_id', 'LastName', 'BirthName', 'SSN', 'Commune', 'Departement', 'Pays', 'Naissance']
    };
   
    new Angular5Csv(this.tab, 'export.csv', options);
  }

  


  close() {
    this.mymodal2.nativeElement.modal("hide");
}


}
