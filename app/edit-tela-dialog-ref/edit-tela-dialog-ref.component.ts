import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TelasService } from "../telas.service";
import { ToastrNotificationService } from "../toastr-notification/toastr-notification.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  id: number;
  nombre: string;
  precio_proveedor: number;
  pvp: number;
  tipo: string;
  comentarios: string;
  proveedor: string;
}

@Component({
  selector: "app-edit-tela-dialog-ref",
  templateUrl: "./edit-tela-dialog-ref.component.html",
  styleUrls: ["./edit-tela-dialog-ref.component.css"]
})
export class EditTelaDialogRefComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTelaDialogRefComponent>,
    private fb: FormBuilder,
    private service: TelasService,
    private notificationService: ToastrNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre: [this.data.nombre, [Validators.required]],
      precio_proveedor: [
        this.data.precio_proveedor,
        [Validators.pattern("^[0-9]+(.[0-9]{1,2})?$")]
      ],
      pvp: [this.data.pvp, [Validators.pattern("^[0-9]+(.[0-9]{1,2})?$")]],
      tipo: this.data.tipo,
      comentarios: this.data.comentarios,
      proveedor: this.data.proveedor
    });
  }

  get nombre() {
    return this.form.get("nombre");
  }
  get precio_proveedor() {
    return this.form.get("precio_proveedor");
  }
  get pvp() {
    return this.form.get("pvp");
  }
  get tipo() {
    return this.form.get("tipo");
  }
  get comentarios() {
    return this.form.get("comentarios");
  }
  get proveedor() {
    return this.form.get("proveedor");
  }

  onExit() {
    this.dialogRef.close();
  }

  submitHandler(myForm: FormGroup) {
    this.service.editTela(
      this.data.id,
      myForm.get("nombre").value,
      myForm.get("precio_proveedor").value,
      myForm.get("pvp").value,
      myForm.get("tipo").value,
      myForm.get("comentarios").value,
      myForm.get("proveedor").value
    );
    this.notificationService.success("Tela editada satisfactoriamente");
    this.dialogRef.close();
  }
}
