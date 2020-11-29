import { Component, OnInit,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { element } from 'protractor';


@Component({
  selector: 'app-menu-evaluacion',
  templateUrl: './menu-evaluacion.component.html',
  styleUrls: ['./menu-evaluacion.component.css']
})
export class MenuEvaluacionComponent implements OnInit {

  opened = false;
  @ViewChild('sidenav') sidenav:MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  @ViewChild('sidenav') sidenav1:MatSidenav;
  isExpanded1 = false;
  showSubmenu1: boolean = false;
  isShowing1 = false;


  constructor(){
  
  }

  ngOnInit(): void {

  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
    if (!this.isExpanded1) {
      this.isShowing1 = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
    if (!this.isExpanded1) {
      this.isShowing1 = false;
    }
  }

  onSelect(){
   this.showSubmenu = !this.showSubSubMenu;

   //showSubmenu = !showSubmenu;
  }

}




