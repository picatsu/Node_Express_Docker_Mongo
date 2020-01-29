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
  }




}


