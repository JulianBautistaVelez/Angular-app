import { Component, OnInit } from '@angular/core';
import { VerMovimientosServiceService } from '../ver-movimientos-service.service';

@Component({
  selector: 'app-ver-movimientos',
  templateUrl: './ver-movimientos.component.html',
  styleUrls: ['./ver-movimientos.component.css']
})
export class VerMovimientosComponent implements OnInit {

  constructor(private servicio:VerMovimientosServiceService) { }
  movimientos:Object;

  ngOnInit() {
  }

  getMovimientos(){
    this.servicio.getMovimientos().subscribe(data=>{
      this.movimientos = data
      //console.log(data)
    })
  }
  getGastos(){
    this.servicio.getGastos().subscribe(data=>{
      this.movimientos = data
      //console.log(data)
    })
  }
  getIngresos(){
    this.servicio.getIngresos().subscribe(data=>{
      this.movimientos = data
      //console.log(data)
    })
  }
  getMovimientosRecientes(){
    this.servicio.getMovimientosRecientes().subscribe(data=>{
      this.movimientos = data
      //console.log(data)
    })
  }
}
