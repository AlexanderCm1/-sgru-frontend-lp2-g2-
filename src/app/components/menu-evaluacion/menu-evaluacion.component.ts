import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-menu-evaluacion',
  templateUrl: './menu-evaluacion.component.html',
  styleUrls: ['./menu-evaluacion.component.css']
})
export class MenuEvaluacionComponent implements OnInit {

  opened = true;
  @ViewChild('sidenav') sidenav:MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(){
  
  }

  ngOnInit(): void {

  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}




