import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InstrumentoComponent } from "../../instrumento/instrumento.component";
import { AlternativaInstrumentoComponent } from "../../instrumento/alternativa-instrumento/alternativa-instrumento.component";
import { CreateInstrumentoComponent } from "../../instrumento/create-instrumento/create-instrumento.component";
import { PreguntaInstrumentoComponent } from "../../instrumento/pregunta-instrumento/pregunta-instrumento.component";
import { DetailInstrumentoComponent } from "../../instrumento/detail-instrumento/detail-instrumento.component";
import { ResultadosComponent } from '../../resultados/resultados.component';

import { AuthService } from '../../../services/auth.service';
import { InterceptorService } from '../../../interceptores/interceptor.service';

import { InterceptorErrorService } from '../../../interceptores/interceptorerror.service';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module'
import { AuthrutasGuard } from "src/app/services/guards/authrutas.guard";
import { RoleGuard } from "src/app/services/guards/role.guard";

@NgModule({
  declarations: [
    InstrumentoComponent,
    AlternativaInstrumentoComponent,
    CreateInstrumentoComponent,
    PreguntaInstrumentoComponent,
    DetailInstrumentoComponent,
    ResultadosComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ],
  providers:[RoleGuard,AuthrutasGuard,
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
  
})
export class MenuModule { }
