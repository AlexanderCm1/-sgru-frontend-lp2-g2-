import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Pregunta } from '../../../models/pregunta';
import { PreguntaService } from '../../../services/pregunta.service';


@Component({
  selector: 'app-detail-instrumento',
  templateUrl: './detail-instrumento.component.html',
  styleUrls: ['./detail-instrumento.component.css']
})
export class DetailInstrumentoComponent implements OnInit {

  constructor(
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {


  }
  onSubmit(f) {
    
    
          this.toastService.show("Question updated", 'green');
          this.toastService.show('Problem in Question update', 'red lighten-1');
        
      
    } 
  deleteQuestion(): boolean {
    if(confirm('You want delete this question?')) {
     
        
          
          
          this.toastService.show('Question deleted', 'green');
       
          this.toastService.show(`Error in delete question `, 'red lighten-1');
        
    }
    return false;
  } 



}
