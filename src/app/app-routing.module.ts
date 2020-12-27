import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstrumentoComponent } from './components/instrumento/instrumento.component';
import { CreateInstrumentoComponent } from './components/instrumento/create-instrumento/create-instrumento.component';
import { DetailInstrumentoComponent } from './components/instrumento/detail-instrumento/detail-instrumento.component';
import { AlternativaInstrumentoComponent } from './components/instrumento/alternativa-instrumento/alternativa-instrumento.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/templates/menu/menu.component';
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';




import {AuthrutasGuard} from './../app/services/guards/authrutas.guard';
import { RoleGuard } from './services/guards/role.guard';

const routes: Routes = [





  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'dashboard', component:DashboardComponent},

  {
    path: 'menu', component: MenuComponent, children: [
      { path: '', loadChildren:()=> import('./components/templates/menu/menu.module').then(mod=>mod.MenuModule)  }
    ]
  },



  /*
  {path: 'instrumento/create', component:CreateInstrumentoComponent ,canActivate:[AuthrutasGuard, RoleGuard], data:{role:'admin'}},

  {path: 'menu', component: MenuComponent,canActivate:[AuthrutasGuard, RoleGuard], data:{role:'admin'}},

  {path: 'instrumento/:id',component:DetailInstrumentoComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'admin'}},
  
  {path: 'instrumento/:id/alternativa/:id', component: AlternativaInstrumentoComponent, canActivate:[AuthrutasGuard, RoleGuard], data:{role:'admin'}},
  */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
