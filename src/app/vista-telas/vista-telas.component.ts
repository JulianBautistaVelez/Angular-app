import { Component, OnInit } from '@angular/core';
import { ToastrNotificationService } from '../toastr-notification/toastr-notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TelasService } from '../telas.service';

@Component({
  selector: 'app-vista-telas',
  templateUrl: './vista-telas.component.html',
  styleUrls: ['./vista-telas.component.css']
})
export class VistaTelasComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb:FormBuilder, 
    private service:TelasService,
    private notificationService:ToastrNotificationService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre:['',[
        Validators.required
      ]],
      precio_proveedor:[null,[
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ]],
      pvp:[null,[
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ]],
      tipo:null,
      comentarios:null,
      proveedor:null
    });
  }

  get nombre(){return this.form.get('nombre');}
  get precio_proveedor(){return this.form.get('precio_proveedor');}
  get pvp(){return this.form.get('pvp');}
  get tipo(){return this.form.get('tipo');}
  get comentarios(){return this.form.get('comentarios');}
  get proveedor(){return this.form.get('proveedor');}

  submitHandler(myForm:FormGroup){
    this.service.insertTela(
      myForm.get('nombre').value,
      myForm.get('precio_proveedor').value,
      myForm.get('pvp').value,
      myForm.get('tipo').value,
      myForm.get('comentarios').value,
      myForm.get('proveedor').value,
      );
    this.notificationService.success('Tela insertada satisfactoriamente');
    this.form.reset();
  }

}
