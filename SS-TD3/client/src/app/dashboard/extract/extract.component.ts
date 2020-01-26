import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BuildServiceService } from '../services/build-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'td-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  message: string;
  messages: string[] = [];
  @ViewChild('content', {static: true}) mymodal: ElementRef;

  constructor(private buildService: BuildServiceService, private modalService: NgbModal) { 

    

   }
  toogled: boolean;
  

  toggleDarkTheme() {
    this.toogled = ! this.toogled;
  }

  ngOnInit() {
    this.buildService.getMessage().subscribe((message: string) => {
      this.messages.push(message);

    });
    this.toogled = true;
    console.log(" LLL", this.mymodal);

    this.open(this.mymodal);
  }
  closeResult: string;

  open(content) {
    console.log(" LLL", content);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
  


  sendMessage(){
    this.buildService.sendMessage(this.message);
    this.message = '';
    
  }


  getMessage() {
    //console.log(' DDD ', this.buildService.getMessage() );  
  
  } 

}
