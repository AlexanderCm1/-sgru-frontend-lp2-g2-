import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select'; 




const MaterialComponents = 
[ 
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatSelectModule

];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
