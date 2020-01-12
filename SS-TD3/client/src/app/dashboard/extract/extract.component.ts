import { Component, OnInit } from '@angular/core';
import { BuildServiceService } from '../services/build-service.service';

@Component({
  selector: 'td-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  message: string;
  messages: string[] = [];
  constructor(private buildService: BuildServiceService) { }


  ngOnInit() {
    this.buildService.getMessage().subscribe((message: string) => {
      this.messages.push(message);

    });
  }

  



  sendMessage(){
    this.buildService.sendMessage(this.message);
    this.message = '';
    
  }


  getMessage() {
    //console.log(' DDD ', this.buildService.getMessage() );  
  
  } 

}
