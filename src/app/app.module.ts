import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { InterceptorService } from './interceptores/interceptor.service';

import { InterceptorErrorService } from './interceptores/interceptorerror.service';


import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CreateInstrumentoComponent } from './components/instrumento/create-instrumento/create-instrumento.component';
import { DetailInstrumentoComponent } from './components/instrumento/detail-instrumento/detail-instrumento.component';
import { ToastrModule} from 'ngx-toastr';
import { AlternativaInstrumentoComponent } from './components/instrumento/alternativa-instrumento/alternativa-instrumento.component';
import { PreguntaInstrumentoComponent } from './components/instrumento/pregunta-instrumento/pregunta-instrumento.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';
import { ResultadosComponent } from './components/resultados/resultados.component';





@NgModule({
  declarations: [
    AppComponent,
    // InstrumentoComponent,
    // CreateInstrumentoComponent,
    // DetailInstrumentoComponent,
    // AlternativaInstrumentoComponent,
    // PreguntaInstrumentoComponent,
    MenuComponent,
    LoginComponent,
    DashboardComponent,
    //ResultadosComponent
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
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorErrorService,
      multi:true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
