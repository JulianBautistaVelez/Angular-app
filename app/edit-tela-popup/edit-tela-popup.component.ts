import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditTelaDialogRefComponent } from '../edit-tela-dialog-ref/edit-tela-dialog-ref.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-edit-tela-popup',
  templateUrl: './edit-tela-popup.component.html',
  styleUrls: ['./edit-tela-popup.component.css']
})
export class EditTelaPopupComponent implements OnInit {

  constructor(public popUp: MatDialog) { }

  ngOnInit() {
  }

  openDialog(
    id:number,
    nombre:string,
    precio_proveedor:number,
    pvp:number,
    tipo:string,
    comentarios:string,
    proveedor:string

  ): void {
    this.popUp.open(EditTelaDialogRefComponent, {
      width: '450px',
      data: {
        id: id,
        nombre: nombre, 
        precio_proveedor: precio_proveedor,
        pvp: pvp,
        tipo:tipo,
        comentarios: comentarios,
        proveedor:proveedor
      }
    });
  }

}



  


