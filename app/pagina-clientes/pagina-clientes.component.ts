import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InsertClientPopupComponent } from '../insert-client-popup/insert-client-popup.component';

@Component({
  selector: 'app-pagina-clientes',
  templateUrl: './pagina-clientes.component.html',
  styleUrls: ['./pagina-clientes.component.css']
})
export class PaginaClientesComponent implements OnInit {

  constructor(private service:ClientesService, private fb:FormBuilder, private popUp:InsertClientPopupComponent ) { }

  clientes:Object;
  clienteEditar:object;
  form:FormGroup;
  

  ngOnInit() {
    this.getClientes();

    this.form = this.fb.group({
      consulta:[null,[
        Validators.required
      ]]
    })
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

  searchInClientes(myForm:FormGroup){
    //console.log(myForm.get('consulta').value);
    this.service.searchInClientes(myForm.get('consulta').value).subscribe(data=>{
      this.clientes = data
      //console.log(data)
    })
  }

  editaCliente(index:number){
    this.clienteEditar = this.clientes[index];
    //console.log(this.clienteEditar);
    //console.log(index)
    this.popUp.openDialog(
      this.clienteEditar['nombre'],
      this.clienteEditar['telefono'],
      this.clienteEditar['direccion'],
      this.clienteEditar['comentarios'],
      this.clienteEditar['id']
    );
  }
  


}