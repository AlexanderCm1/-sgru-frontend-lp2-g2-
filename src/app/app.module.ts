import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { MenuEvaluacionComponent } from './components/menu-evaluacion/menu-evaluacion.component';
import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CreateInstrumentoComponent } from './components/instrumento/create-instrumento/create-instrumento.component';
import { DetailInstrumentoComponent } from './components/instrumento/detail-instrumento/detail-instrumento.component';
import {ToastrModule} from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    MenuEvaluacionComponent,
    InstrumentoComponent,
    CreateInstrumentoComponent,
    DetailInstrumentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule,
    ToastrModule.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
