import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CreateInstrumentoComponent } from './components/instrumento/create-instrumento/create-instrumento.component';
import { DetailInstrumentoComponent } from './components/instrumento/detail-instrumento/detail-instrumento.component';
import {ToastrModule} from 'ngx-toastr';
import { AlternativaInstrumentoComponent } from './components/instrumento/alternativa-instrumento/alternativa-instrumento.component';
import { PreguntaInstrumentoComponent } from './components/instrumento/pregunta-instrumento/pregunta-instrumento.component';
import { MenuComponent } from './components/templates/menu/menu.component';





@NgModule({
  declarations: [
    AppComponent,
    InstrumentoComponent,
    CreateInstrumentoComponent,
    DetailInstrumentoComponent,
    AlternativaInstrumentoComponent,
    PreguntaInstrumentoComponent,
    MenuComponent,
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
    ToastrModule.forRoot(),
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
