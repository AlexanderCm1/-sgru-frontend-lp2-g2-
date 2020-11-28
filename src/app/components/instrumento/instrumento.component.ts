import { Component, OnInit } from '@angular/core';
import { Semestre }  from '../../models/semestre';
import { SemestreService } from '../../services/semestre.service';


@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css'],
  providers: [SemestreService]
})
export class InstrumentoComponent implements OnInit {
  selected = 'option2';
  public semestres: Semestre[];

  constructor
  (
    private _semestreSerive:SemestreService,

  ) { }

  ngOnInit(): void {
    this.getSemestres();
  }

  getSemestres(){
    this._semestreSerive.getSemestres().subscribe(
      response =>{
        if(response.semestres){
          this.semestres = response.semestres;
          console.log(this.semestres);
        }
      },
      error =>{

      }
    );
  }
}
