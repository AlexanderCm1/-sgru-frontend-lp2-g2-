import { Component ,OnInit,ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { element } from 'protractor';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  opened = false;
  @ViewChild('sidenav') sidenav:MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;


  
  isExpanded1 = false;
  showSubmenu1: boolean = false;
  isShowing1 = false;
  showSubSubMenu1:boolean = false;



  isExpanded2 = false;
  showSubmenu2: boolean = false;
  isShowing2 = false;
  showSubSubMenu2:boolean = false;


  isExpanded3 = false;
  showSubmenu3: boolean = false;
  isShowing3 = false;
  showSubSubMenu3:boolean = false;


  isExpanded4 = false;
  showSubmenu4: boolean = false;
  isShowing4 = false;
  showSubSubMenu4:boolean = false;


  //route
  public ruta:any;

  constructor(
    private route:Router
  ){
    this.ruta = this.route.url;
  }

  ngOnInit(): void {
    console.log(this.route.url);
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
    if (!this.isExpanded1) {
      this.isShowing1 = true;
    }
    if (!this.isExpanded2) {
      this.isShowing2 = true;
    }
    if (!this.isExpanded3) {
      this.isShowing3 = true;
    }
    if (!this.isExpanded4) {
      this.isShowing4 = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
    if (!this.isExpanded1) {
      this.isShowing1 = false;
    }
    if (!this.isExpanded2) {
      this.isShowing2 = false;
    }
    if (!this.isExpanded3) {
      this.isShowing3 = false;
    }
    if (!this.isExpanded4) {
      this.isShowing4 = false;
    }
  }

  onSelect(){
   if(this.showSubmenu){
    !this.showSubSubMenu;
   } 
   if(this.showSubmenu1){
    !this.showSubmenu1;
   }
   

   //showSubmenu = !showSubmenu;
  }

}
