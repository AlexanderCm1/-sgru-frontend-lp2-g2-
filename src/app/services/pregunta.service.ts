import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Instrumento } from '../models/instrumento';


@Injectable({
    providedIn: 'root'
})
export class PreguntaService{
    public url:string;


    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    getInstrumento(id:number){
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'pregunta/' + id,{headers:headers} );
    }
}