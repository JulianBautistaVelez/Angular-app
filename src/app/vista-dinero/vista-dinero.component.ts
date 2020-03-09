import { Component, OnInit, Input } from "@angular/core";
import { VerMovimientosServiceService } from "../ver-movimientos-service.service";
import { MoverDineroPopupComponent } from "../mover-dinero-popup/mover-dinero-popup.component";
import { Dinero } from "../models/Dinero";

@Component({
  selector: "app-vista-dinero",
  templateUrl: "./vista-dinero.component.html",
  styleUrls: ["./vista-dinero.component.css"]
})
export class VistaDineroComponent implements OnInit {
  dinero: Number;
  data: Dinero;
  isLoaded: Boolean = false;
  @Input() origen: string;
  constructor(
    private service: VerMovimientosServiceService,
    private popUp: MoverDineroPopupComponent
  ) {}

  ngOnInit() {
    this.getDinero();
  }

  getDinero(): void {
    this.service.getDineroDisponible().subscribe((data:Dinero) => {
      this.data = data;
      if (this.origen == "Caja") this.dinero = this.data["caja"];
      else this.dinero = this.data["banco"];
      this.isLoaded = true;
    })
  }

  moverDinero() {
    this.popUp.openDialog(this.origen);
    this.ngOnInit();
  }
}
