import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InsertClienteDialogRefComponent } from '../insert-cliente-dialog-ref/insert-cliente-dialog-ref.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-insert-client-popup',
  templateUrl: './insert-client-popup.component.html',
  styleUrls: ['./insert-client-popup.component.css']
})
export class InsertClientPopupComponent implements OnInit {


  constructor(public popUp: MatDialog) { }

  ngOnInit() {
  }

  openDialog(
    nombre:string,
    telefono:number,
    direccion:string,
    comentarios:string,
    id:number

  ): void {
    this.popUp.open(InsertClienteDialogRefComponent, {
      width: '450px',
      data: {
        id: id,
        nombre: nombre, 
        telefono: telefono,
        direccion: direccion,
        comentarios: comentarios
      }
    });
  }

}
