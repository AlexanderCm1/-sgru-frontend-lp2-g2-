import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { MenuEvaluacionComponent } from './components/menu-evaluacion/menu-evaluacion.component';
import { CreateInstrumentoComponent } from './components/instrumento/create-instrumento/create-instrumento.component';
import { DetailInstrumentoComponent } from './components/instrumento/detail-instrumento/detail-instrumento.component';


const routes: Routes = [
  {path: '', component: MenuEvaluacionComponent},
  {path: 'instrumentos', component: InstrumentoComponent},
  {path: 'instrumento/create', component:CreateInstrumentoComponent},
  {path: 'instrumento/:id',component:DetailInstrumentoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
