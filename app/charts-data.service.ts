import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import * as myGlobals from "./globals";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ChartsDataService {
  constructor(private http: HttpClient) {}
  /*direcciones url post y get estan en myGlobals*/
  private values: any;

  getHistorialDinero() {
    var parametros = new HttpParams().set("tabla", "hist_dinero");
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getHistorialDineroFiltrado() {
    var parametros = new HttpParams().set("tabla", "hist_dinero_stats");
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getIngresosPieData() {
    var parametros = new HttpParams().set("tabla", "ingresos_stats");
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getGastosPieData() {
    var parametros = new HttpParams().set("tabla", "gastos_stats");
    return this.http.get(myGlobals.url_get, { params: parametros });
  }
}
