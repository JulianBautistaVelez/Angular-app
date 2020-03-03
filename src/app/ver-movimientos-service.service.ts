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
export class VerMovimientosServiceService {
  constructor(private http: HttpClient) {}
  /*direcciones url post y get estan en myGlobals*/
  private values: any;

  getMovimientos(fechas) {
    //console.log(fechas);
    var parametros = new HttpParams()
      .set("tabla", "movimientos")
      .set("fechaInicio", fechas.fechaInicio)
      .set("fechaFinal", fechas.fechaFinal);
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getIngresos(fechas) {
    var parametros = new HttpParams()
      .set("tabla", "ingresos")
      .set("fechaInicio", fechas.fechaInicio)
      .set("fechaFinal", fechas.fechaFinal);
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getGastos(fechas) {
    var parametros = new HttpParams()
      .set("tabla", "gastos")
      .set("fechaInicio", fechas.fechaInicio)
      .set("fechaFinal", fechas.fechaFinal);
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  getMovimientosRecientes() {
    var parametros = new HttpParams().set("tabla", "mov_rec");
    return this.http.get(myGlobals.url_get, { params: parametros });
    /*return this.movimientos;*/
  }

  getDineroDisponible() {
    var parametros = new HttpParams().set("tabla", "din_disp");
    return this.http.get(myGlobals.url_get, { params: parametros });
  }

  moverDinero(cantidad, destino) {
    this.values = {
      tabla: "mover_dinero",
      dinero: cantidad,
      destino: destino
    };
    this.http.post<any>(myGlobals.url_post, this.values, httpOptions).subscribe(
      (val: any) => {
        console.log("POST call successful value returned in body", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      }
    );
  }
}
