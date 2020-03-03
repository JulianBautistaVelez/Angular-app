import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { __values } from "tslib";
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
export class ClientesService {
  constructor(private http: HttpClient) {}

  private final_url = "";
  private values: any;

  insertClientes(
    /*cliente:Cliente*/
    nombre: String,
    direccion?: String,
    telefono?: Number,
    comentarios?: String
  ) {
    this.values = {
      tabla: "clientes",
      nom: nombre
    };

    if (direccion !== null) {
      this.values.dir = direccion;
    }
    if (telefono !== null) {
      this.values.tel = telefono;
    }
    if (comentarios !== null) {
      this.values.com = comentarios;
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

  getClientes() {
    this.final_url = myGlobals.url_get + "?tabla=clientes";
    //console.log(this.final_url)
    return this.http.get(this.final_url);
  }

  searchInClientes(consulta: String) {
    this.final_url = myGlobals.url_get + "?tabla=clientes&consulta=" + consulta;
    //console.log(this.final_url)
    return this.http.get(this.final_url);
  }

  editCliente(
    id: number,
    nombre: string,
    direccion: string,
    telefono: number,
    comentarios: string
  ) {
    this.values = {
      tabla: "edita_cliente",
      id: id,
      nom: nombre
    };

    if (direccion !== null) {
      this.values.dir = direccion;
    }
    if (telefono !== null) {
      this.values.tel = telefono;
    }
    if (comentarios !== null) {
      this.values.com = comentarios;
    }

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

  getLastClientes(numero: number) {
    this.final_url = myGlobals.url_get + "?tabla=clientes_rec&ult=" + numero;
    //console.log(this.final_url)
    return this.http.get(this.final_url);
  }
}
