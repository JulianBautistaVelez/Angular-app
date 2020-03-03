import { Component, OnInit, Inject } from "@angular/core";
import { VerMovimientosServiceService } from "../ver-movimientos-service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrNotificationService } from "../toastr-notification/toastr-notification.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  dinero: number;
  destino: string;
}

@Component({
  selector: "app-mover-dinero-dialog-ref",
  templateUrl: "./mover-dinero-dialog-ref.component.html",
  styleUrls: ["./mover-dinero-dialog-ref.component.css"]
})
export class MoverDineroDialogRefComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MoverDineroDialogRefComponent>,
    private fb: FormBuilder,
    private service: VerMovimientosServiceService,
    private notificationService: ToastrNotificationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  origen = this.data.destino;
  destino: string;

  ngOnInit() {
    this.destino = this.origen === "Banco" ? "Caja" : "Banco";
    this.form = this.fb.group({
      cantidad: ["", [Validators.required]],
      destino: this.data.destino
    });
  }

  get cantidad() {
    return this.form.get("cantidad");
  }

  onExit() {
    this.dialogRef.close();
  }

  submitHandler() {
    this.service.moverDinero(
      this.form.get("cantidad").value,
      this.form.get("destino").value
    );
    this.notificationService.success("Cantidad movida satisfactoriamente");
    this.dialogRef.close();
  }
}
