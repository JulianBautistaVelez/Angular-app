import { Component, OnInit, Input } from '@angular/core';
import { InsertMovimientosService } from '../insert-movimientos.service';
import { ToastrNotificationService } from '../toastr-notification/toastr-notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flujo-dinero',
  templateUrl: './flujo-dinero.component.html',
  styleUrls: ['./flujo-dinero.component.css']
})
export class FlujoDineroComponent implements OnInit {
  @Input() salida_entrada: String;
  form: FormGroup;
  esEntrada = false;
  gastosFrecuentes = [
    "Comida",
    "Combustible",
    "Materiales",
    "Salario",
    "Alquiler Taller",
    "Servicios",
    "Impuestos",
    "Seguridad social"
  ];
          
  ingresosFrecuentes = [
    "Encolar",
    "Cojines",
    "Sillas",
    "Sillones",
    "Sofás",
    "Espuma",
    "Telas",
    "Rejilla"
  ];
 
  constructor(
    private fb:FormBuilder, 
    private servicio:InsertMovimientosService, 
    private notificationService:ToastrNotificationService) { }

  ngOnInit() {

    this.form = this.fb.group({
      cantidad:[null,[
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ]],
      concepto:null,
      caja_banco:[null,[
        Validators.required
      ]],
      tipo:null
    })
    if(this.salida_entrada === 'Entrante') 
      {
        this.form.controls['tipo'].setValue("ingreso");
        this.esEntrada = true;
        //console.log(this.esEntrada)
      }

    if(this.salida_entrada === 'Saliente')
    {
      this.form.controls['tipo'].setValue("gasto");
    }
  }

  get cantidad(){return this.form.get('cantidad');}
  get concepto(){return this.form.get('concepto');}
  get caja_banco(){return this.form.get('caja_banco');}
  get tipo(){return this.form.get('tipo');}



  submitHandler(myForm){
    //console.log(myForm);
    this.servicio.insertMov(
      myForm.get('tipo').value,
      myForm.get('cantidad').value,
      myForm.get('caja_banco').value,
      myForm.get('concepto').value);

    this.notificationService.success("Movimiento insertado satisfactoriamente");
    this.form.reset();
  }
}
