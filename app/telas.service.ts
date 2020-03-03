import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { __values } from "tslib";
import { HttpHeaders } from "@angular/common/http";
import * as myGlobals from "./globals";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TelasService {
  constructor(private http: HttpClient) {}
  /*direcciones url post y get estan en myGlobals*/
  private final_url = "";
  private values: any;

  insertTela(
    nombre: String,
    precio_proveedor?: Number,
    pvp?: Number,
    tipo?: String,
    comentarios?: String,
    proveedor?: String
  ) {
    this.values = {
      tabla: "telas",
      nom: nombre
    };

    if (precio_proveedor !== null) {
      this.values.prec = precio_proveedor;
    }
    if (pvp !== null) {
      this.values.pvp = pvp;
    }
    if (tipo !== null) {
      this.values.tip = tipo;
    }
    if (comentarios !== null) {
      this.values.com = comentarios;
    }
    if (proveedor !== null) {
      this.values.prov = proveedor;
    }

    //console.log(this.values);

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

  getTelas() {
    this.final_url = myGlobals.url_get + "?tabla=consultar_telas";
    //console.log(this.final_url)
    return this.http.get(this.final_url);
  }

  editTela(
    id: number,
    nombre: string,
    precio_proveedor: number,
    pvp: number,
    tipo: string,
    comentarios: string,
    proveedor: string
  ) {
    this.values = {
      tabla: "edita_tela",
      id: id,
      nom: nombre
    };

    if (precio_proveedor !== null) {
      this.values.prec = precio_proveedor;
    }
    if (pvp !== null) {
      this.values.pvp = pvp;
    }
    if (tipo !== null) {
      this.values.tip = tipo;
    }
    if (comentarios !== null) {
      this.values.com = comentarios;
    }
    if (proveedor !== null) {
      this.values.prov = proveedor;
    }

    //console.log(this.values)

    this.http.put(myGlobals.url_post, this.values, httpOptions).subscribe(
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

  searchInTelas(consulta: String) {
    this.final_url =
      myGlobals.url_get + "?tabla=busca_en_telas&consulta=" + consulta;
    //console.log(this.final_url)
    return this.http.get(this.final_url);
  }
}
