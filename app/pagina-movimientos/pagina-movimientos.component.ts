import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { VerMovimientosServiceService } from "../ver-movimientos-service.service";

@Component({
  selector: "app-pagina-movimientos",
  templateUrl: "./pagina-movimientos.component.html",
  styleUrls: ["./pagina-movimientos.component.css"]
})
export class PaginaMovimientosComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private servicio: VerMovimientosServiceService
  ) {}
  dataSource: Object;
  displayedColumns: string[] = [
    "Fecha",
    "Concepto",
    "Cantidad",
    "Origen/Destino"
  ];
  datosFecha: FormGroup;
  fechaActual = new Date();
  fechaInicioMes = new Date(); //la modifico en ngOnInit

  ngOnInit() {
    this.fechaInicioMes.setDate(1);
    this.datosFecha = this.fb.group({
      fechaInicio: new FormControl(this.fechaInicioMes),
      fechaFinal: new FormControl(this.fechaActual)
    });
    this.getMovimientos();
  }

  getTotalCost() {
    /*HACER FUNCIONAR ESTO*/
    var suma = 0;
    var arrDatos = Object.keys(this.dataSource).map(i => this.dataSource[i]);
    arrDatos.forEach(mov => {
      suma += parseFloat(mov["valor"]);
    });

    return suma;
  }
  cambioFechaInicio() {
    this.getMovimientos();
  }
  cambioFechaFinal() {
    this.getMovimientos();
  }

  getMovimientos() {
    this.servicio.getMovimientos(this.datosFecha.value).subscribe(data => {
      this.dataSource = data;
    });
  }
  getGastos() {
    this.servicio.getGastos(this.datosFecha.value).subscribe(data => {
      this.dataSource = data;
    });
  }
  getIngresos() {
    this.servicio.getIngresos(this.datosFecha.value).subscribe(data => {
      this.dataSource = data;
    });
  }
  getMovimientosRecientes() {
    this.servicio.getMovimientosRecientes().subscribe(data => {
      this.dataSource = data;
    });
  }
}
