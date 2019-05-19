import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as myGlobals from './globals';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InsertMovimientosService {

  constructor(
    private http:HttpClient
    ) { }
    private values:any;

  insertMov (
    tipo:string,
    valor:string,
    caja_banco:string,
    concepto?:string
  ){

    this.values = {
      tabla:'movimientos',
      tipo:tipo,
      c_b:caja_banco,
      val:valor
    }
    
    if(concepto !== null){this.values.con = concepto}
    
    console.log(this.values);
    
      this.http.post<any>(myGlobals.url_post,this.values,httpOptions).subscribe(
        (val:any) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
    
  }
 
}
