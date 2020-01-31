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
import { ToastrService } from 'ngx-toastr';

import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment';



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
  private url = 'http://'+environment.urlApiTd3+':'+environment.PORT;
  @ViewChild('scrollMe', {static: true}) private myScrollContainer: ElementRef;
  @ViewChild('content', {static: true}) mymodal: ElementRef;
  @ViewChild('content2', {static: true}) mymodal2: ElementRef;

  private socket; 
  tab = [];
  toogled = true;
  isChecked: boolean;
  searchKeyword: any;
  displayresult: boolean = false;
  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.close()
    }
  }


  constructor( private modalService: NgbModal,
    private toastr: ToastrService ) {  
    this.socket = io(this.url);
    this.isChecked = true;

  }

  
 
  
  shouldADD() {
    this.isChecked = !this.isChecked;

    this.socket.emit('shouldAdd', this.isChecked);
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
    console.log('AFFICHAGE ANGULAR ', this.socket);

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
    let messageReturn = '';
  this.socket.emit('deleteLigne', ssn);
    this.socket.on('deleteLigne', (message) => {
     /// AFFICHAGE TOAST 
     console.log('je supprime sa :', message);
     messageReturn = message.message;

   });
   this.toastr.success( ssn + ' DELETED ', 'Delete Sucessfull', {
    timeOut: 1500
  });

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
