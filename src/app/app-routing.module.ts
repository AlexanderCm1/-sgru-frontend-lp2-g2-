import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { MenuEvaluacionComponent } from './components/menu-evaluacion/menu-evaluacion.component';
const routes: Routes = [

  {path : 'instrumento', component: InstrumentoComponent},
  {path: '', component: MenuEvaluacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
