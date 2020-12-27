import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { AuthrutasGuard } from "src/app/services/guards/authrutas.guard";
import { RoleGuard } from "src/app/services/guards/role.guard";


import { InstrumentoComponent } from "../../instrumento/instrumento.component";
import { AlternativaInstrumentoComponent } from "../../instrumento/alternativa-instrumento/alternativa-instrumento.component";
import { CreateInstrumentoComponent } from "../../instrumento/create-instrumento/create-instrumento.component";
import { PreguntaInstrumentoComponent } from "../../instrumento/pregunta-instrumento/pregunta-instrumento.component";
import { DetailInstrumentoComponent } from "../../instrumento/detail-instrumento/detail-instrumento.component";
import { ResultadosComponent } from '../../resultados/resultados.component';

const routes:Routes = [

  {path: 'instrumento/create', component:CreateInstrumentoComponent,canActivate:[AuthrutasGuard, RoleGuard], data: {role:"evaluador" || "admin"}},

  //{path: 'menu', component: MenuComponent,canActivate:[AuthrutasGuard, RoleGuard], data:{role:'admin'}},

  {path: 'instrumento/:id',component:DetailInstrumentoComponent,canActivate:[AuthrutasGuard, RoleGuard], data:{role:'evaluador'}},
  
  {path: 'instrumento/:id/alternativa/:id', component: AlternativaInstrumentoComponent,canActivate:[AuthrutasGuard, RoleGuard], data:{role:'evaluador'}},
  {path: 'resultados', component:ResultadosComponent}
]





@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
export class MenuRoutingModule{

}