import { Component, OnInit, Input } from "@angular/core";
import { VerMovimientosServiceService } from "../ver-movimientos-service.service";
import { MoverDineroPopupComponent } from "../mover-dinero-popup/mover-dinero-popup.component";

@Component({
  selector: "app-vista-dinero",
  templateUrl: "./vista-dinero.component.html",
  styleUrls: ["./vista-dinero.component.css"]
})
export class VistaDineroComponent implements OnInit {
  dinero: any;
  info: any;
  @Input() origen: string;
  constructor(
    private service: VerMovimientosServiceService,
    private popUp: MoverDineroPopupComponent
  ) {}

  ngOnInit() {
    this.getDinero();
  }

  getDinero(): void {
    /*IMPLEMENTAR AQUI UN USO DE UN SERVICIO WEB QUE REGRESE EL DINERO
    DANDOLE EL ORIGEN BANCO/CAJA*/
    this.service.getDineroDisponible().subscribe(data => {
      this.info = data;

      if (this.origen == "Caja") this.dinero = this.info[0]["caja"];
      else this.dinero = this.info[0]["banco"];
    });
  }

  moverDinero() {
    this.popUp.openDialog(this.origen);
    this.ngOnInit();
  }
}
