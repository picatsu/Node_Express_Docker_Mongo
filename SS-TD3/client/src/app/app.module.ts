import { NgModule } from '@angular/core';

import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, TableModule } from 'angular-bootstrap-md';
// MDB Angular Pro

// Angular Forms
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { JwPaginationComponent } from 'jw-angular-pagination';



@NgModule({
  declarations: [
    AppComponent , JwPaginationComponent ],
 
  imports: [
    
    ToolbarModule,
    DashboardModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    WavesModule, TableModule ,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    ToastrModule.forRoot()
      ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }