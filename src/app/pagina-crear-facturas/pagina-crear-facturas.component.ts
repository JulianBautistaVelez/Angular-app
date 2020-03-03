import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {FacturasService} from '../facturas.service';

@Component({
  selector: 'app-pagina-crear-facturas',
  templateUrl: './pagina-crear-facturas.component.html',
  styleUrls: ['./pagina-crear-facturas.component.css']
})
export class PaginaCrearFacturasComponent implements OnInit {
  loading=false;
  success=false;
  isLinear = false;
  factDatos: FormGroup;
  clientDatos: FormGroup;
  compraDatos: FormGroup;
  constructor(private fb: FormBuilder, private service:FacturasService) { }

  ngOnInit() {
    this.factDatos = this.fb.group({
      numero: ['', [
        Validators.pattern('^[0-9]+(\[0-9])?$'),
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.required
      ]],
      fecha: ['', Validators.required],
      nombre: ['', Validators.required],
      nif: ['', Validators.required],
      direccion: ['', Validators.required],
      cpProvincia: ['', Validators.required],
      productos: this.fb.array([])
    });
    
  }

  get numero(){
    return this.factDatos.get('numero');
  }
  get fecha(){
    return this.factDatos.get('fecha');
  }
  get nombre(){
    return this.factDatos.get('nombre');
  }
  get nif(){
    return this.factDatos.get('nif');
  }
  get direccion(){
    return this.factDatos.get('direccion');
  }
  get cpProvincia(){
    return this.factDatos.get('cpProvincia');
  }

  get productoForms(){
    return this.factDatos.get('productos') as FormArray
  }

  addProducto(){
    const compra= this.fb.group({
      cantidad: ['',[
        Validators.pattern('^[0-9]+(\[0-9])?$'),
        Validators.maxLength(3),
        Validators.required
      ]],
      concepto: [null],
      valor: ['',[
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$'),
        Validators.required
      ]],
      suma:[null],
    })
    this.productoForms.push(compra)
  }

  deleteProducto(i){
    this.productoForms.removeAt(i);
  }

  async submitHandler() {
    this.loading = true;

    try {
      await this.service.creaFactura(this.factDatos.value)
        .subscribe(results =>  {
          var url = results;
          window.open(url);
        }) ; 
      this.success = true;

    } catch(err) {
      console.error(err)
    }

    this.loading = false;
  }
}