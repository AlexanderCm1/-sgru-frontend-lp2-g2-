import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { CreateInstrumentoComponent } from './components/instrumento/create-instrumento/create-instrumento.component';
import { DetailInstrumentoComponent } from './components/instrumento/detail-instrumento/detail-instrumento.component';
import { AlternativaInstrumentoComponent } from './components/instrumento/alternativa-instrumento/alternativa-instrumento.component';

const routes: Routes = [
  
  {path: 'instrumento/create', component:CreateInstrumentoComponent},
  {path: 'instrumento/:id',component:DetailInstrumentoComponent},
  {path: 'instrumento/:id/alternativa/:id', component: AlternativaInstrumentoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
