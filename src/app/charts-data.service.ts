import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import * as myGlobals from "./globals";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: "root"
})
export class ChartsDataService {
  constructor(private http: HttpClient) { }
  /*direcciones url post y get estan en myGlobals*/

  getHistorialDineroFiltrado() {
    var parametros = new HttpParams().set(myGlobals.query, myGlobals.liquides_hist);
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getIngresosPieData() {
    var parametros = new HttpParams().set(myGlobals.query, myGlobals.ingresos_stats);
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getGastosPieData() {
    var parametros = new HttpParams().set(myGlobals.query, myGlobals.gastos_stats);
    return this.http.get(myGlobals.url_get, { params: parametros });
  }
}
