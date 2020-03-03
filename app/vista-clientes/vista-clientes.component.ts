import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { ToastrNotificationService } from '../toastr-notification/toastr-notification.service';

@Component({
  selector: 'app-vista-clientes',
  templateUrl: './vista-clientes.component.html',
  styleUrls: ['./vista-clientes.component.css']
})
export class VistaClientesComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb:FormBuilder, 
    private service:ClientesService,
    private notificationService:ToastrNotificationService
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre:['',[
        Validators.required
      ]],
      direccion:null,
      telefono:[null,[
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern('[0-9]+')
      ]],
      trabajos:null,
      presupuestos:null,
      comentarios:null,
    });
    
  }

  get nombre(){return this.form.get('nombre');}
  get direccion(){return this.form.get('direccion');}
  get telefono(){return this.form.get('telefono');}
  get trabajos(){return this.form.get('trabajos');}
  get presupuestos(){return this.form.get('presupuestos');}
  get comentarios(){return this.form.get('comentarios');}

  submitHandler(myForm:FormGroup){
    this.service.insertClientes(
      myForm.get('nombre').value,
      myForm.get('direccion').value,
      myForm.get('telefono').value,
      myForm.get('comentarios').value,
      );
    this.notificationService.success('Cliente insertado satisfactoriamente');
    this.form.reset();
  }

}
