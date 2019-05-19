import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as myGlobals from './globals';

@Injectable({
  providedIn: 'root'
})
export class VerMovimientosServiceService {

  constructor(private http:HttpClient) { }
  /*direcciones url post y get estan en myGlobals*/
  final_url:string;

  getMovimientos(){
    
    this.final_url=myGlobals.url_get+'?tabla=movimientos'
    //console.log(this.final_url)
    return this.http.get(this.final_url)
  }

  getIngresos(){
    this.final_url=myGlobals.url_get+'?tabla=ingresos'
    return this.http.get(this.final_url)
  }

  getGastos(){
    this.final_url=myGlobals.url_get+'?tabla=gastos'
    return this.http.get(this.final_url)
  }

  getMovimientosRecientes(){
    this.final_url=myGlobals.url_get+'?tabla=mov_rec'
    return this.http.get(this.final_url)
    /*return this.movimientos;*/
  }
  
  getDineroDisponible(){
    this.final_url=myGlobals.url_get+'?tabla=din_disp'
    //console.log(this.final_url)
    return this.http.get(this.final_url)
  }



}
