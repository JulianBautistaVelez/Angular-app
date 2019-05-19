import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(private service:ClientesService) { }

  clientes:Object;

  ngOnInit() {
  }

  getClientes(){
    this.service.getClientes().subscribe(data=>{
      this.clientes = data
      //console.log(data)
    })
  }

  getUltimosClientes(){
    this.service.getLastClientes(5).subscribe(data=>{
      this.clientes = data
      //console.log(data)
    })

  }

  searchInClientes(){
    this.service.searchInClientes('julian').subscribe(data=>{
      this.clientes = data
      //console.log(data)
    })
  }
}
