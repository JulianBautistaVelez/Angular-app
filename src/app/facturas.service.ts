import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as myGlobals from './globals';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http:HttpClient) { }
  creaFactura(formValues)
  {
    formValues.tabla ="crea_factura";
      return this.http.post<any>(myGlobals.url_post,formValues)
  }
}

