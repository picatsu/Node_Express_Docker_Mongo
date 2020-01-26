import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class BuildServiceService {
  tab = [];
  private url = 'http://localhost:3000';
    
  private socket; 
  

  constructor() {

    this.socket = io(this.url);
    for (let i = 0; i < 60; i++) {
      this.tab.push({
        _id: 'id '+i, 
        lastname: 'lastname'+i,
        birthname: 'birthname'+i,
        ssn: 'ssn'+i,
        commune: 'commune'+i,
        departement: 'departement'+i,
        pays: 'pays'+i,
        naissance: 'naissance'+i
      })
    }
   // this.socket.emit("connection", "connection");
      //console.log(' AFFF ', this.branche[2 % 2])
    
    }

   getTab(){
     return this.tab;
   }


   public sendMessage(message) {
    this.socket.emit('sending message', message);
  }
   

  
  getMessage() {
    //return this.socket
      //  .fromEvent("new message") ;
      return Observable.create((observer) => {
        this.socket.on('new message', (message) => {
            observer.next(message);
        });
    });

  } 




}



export interface BuildJson {
  _id: string;
  lastname: string;
  birthname: string;
  ssn: string;
  commune: string;
  departement: string;
  pays: string;
  naissance: string;
  checked: boolean
}

export interface Scenarii {
  indice: string;
  mock: boolean;
  failure: boolean;
  explication: string
}