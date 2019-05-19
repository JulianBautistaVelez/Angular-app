import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { __values } from 'tslib';
import * as myGlobals from '../globals';


@Injectable({
  providedIn: 'root'
})
export class PieDataService {

  constructor(private http:HttpClient) { }

  private final_url = '';

  getPieData(tipo:String){
    if(tipo == "gastos") this.final_url=myGlobals.url_get+'?tabla=gastos_stats';
    if(tipo == "ingresos") this.final_url=myGlobals.url_get+'?tabla=ingresos_stats';
    
    //console.log(this.final_url)
    return this.http.get(this.final_url)
  }

}





    