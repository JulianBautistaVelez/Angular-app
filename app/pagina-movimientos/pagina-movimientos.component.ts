import { Component, OnInit } from '@angular/core';
import { VerMovimientosServiceService } from '../ver-movimientos-service.service'

@Component({
  selector: 'app-pagina-movimientos',
  templateUrl: './pagina-movimientos.component.html',
  styleUrls: ['./pagina-movimientos.component.css']
})
export class PaginaMovimientosComponent implements OnInit {

  constructor(private servicio:VerMovimientosServiceService) { }
  dataSource:Object;
  displayedColumns: string[] = ['Fecha', 'Concepto', 'Cantidad', 'Origen/Destino'];


  ngOnInit() {
    this.getMovimientos();
  }

  getMovimientos(){
    this.servicio.getMovimientos().subscribe(data=>{
      this.dataSource = data;
    })
  }
  getGastos(){
    this.servicio.getGastos().subscribe(data=>{
      this.dataSource = data;
    })
  }
  getIngresos(){
    this.servicio.getIngresos().subscribe(data=>{
      this.dataSource = data;
    })
  }
  getMovimientosRecientes(){
    this.servicio.getMovimientosRecientes().subscribe(data=>{
      this.dataSource = data;
    })
  }
}

