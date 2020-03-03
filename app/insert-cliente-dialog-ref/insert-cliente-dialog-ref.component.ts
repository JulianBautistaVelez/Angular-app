import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { ToastrNotificationService } from '../toastr-notification/toastr-notification.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



export interface DialogData {
  id:number,
  nombre: string;
  direccion: string;
  telefono: number;
  comenatrios: string;
}

@Component({
  selector: 'app-insert-cliente-dialog-ref',
  templateUrl: './insert-cliente-dialog-ref.component.html',
  styleUrls: ['./insert-cliente-dialog-ref.component.css']
})

export class InsertClienteDialogRefComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<InsertClienteDialogRefComponent>,
    private fb:FormBuilder, 
    private service:ClientesService,
    private notificationService:ToastrNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre:[this.data['nombre'],[
        Validators.required
      ]],
      direccion:this.data['direccion'],
      telefono:[this.data['telefono'],[
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern('[0-9]+')
      ]],
      trabajos:null,
      presupuestos:null,
      comentarios:this.data['comentarios'],
    });
    
  }

  get nombre(){return this.form.get('nombre');}
  get direccion(){return this.form.get('direccion');}
  get telefono(){return this.form.get('telefono');}
  get trabajos(){return this.form.get('trabajos');}
  get presupuestos(){return this.form.get('presupuestos');}
  get comentarios(){return this.form.get('comentarios');}

  submitHandler(myForm:FormGroup){
    this.service.editCliente(
      this.data.id,
      myForm.get('nombre').value,
      myForm.get('direccion').value,
      myForm.get('telefono').value,
      myForm.get('comentarios').value,
      );
    this.notificationService.success('Cliente editado satisfactoriamente');
    this.dialogRef.close();
  }

  onExit(){
    this.dialogRef.close();
  }

}