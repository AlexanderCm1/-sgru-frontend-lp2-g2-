import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sgru-front';
  constructor(
    public authService:AuthService
  ){
    
  }

  ngOnInit(): void {
    
   
  }

}
