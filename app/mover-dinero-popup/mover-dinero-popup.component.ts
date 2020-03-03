import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Injectable } from "@angular/core";
import { MoverDineroDialogRefComponent } from "../mover-dinero-dialog-ref/mover-dinero-dialog-ref.component";

@Injectable({
  providedIn: "root"
})
@Component({
  selector: "app-mover-dinero-popup",
  templateUrl: "./mover-dinero-popup.component.html",
  styleUrls: ["./mover-dinero-popup.component.css"]
})
export class MoverDineroPopupComponent implements OnInit {
  constructor(public popUp: MatDialog) {}

  ngOnInit() {}

  openDialog(destino: string) {
    this.popUp.open(MoverDineroDialogRefComponent, {
      width: "450px",
      data: {
        destino: destino
      }
    });
  }
}
