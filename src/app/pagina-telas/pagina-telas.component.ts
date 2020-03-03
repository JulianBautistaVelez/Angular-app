import { Component, OnInit } from "@angular/core";
import { TelasService } from "../telas.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EditTelaPopupComponent } from "../edit-tela-popup/edit-tela-popup.component";

@Component({
  selector: "app-pagina-telas",
  templateUrl: "./pagina-telas.component.html",
  styleUrls: ["./pagina-telas.component.css"]
})
export class PaginaTelasComponent implements OnInit {
  constructor(
    private service: TelasService,
    private fb: FormBuilder,
    private popUp: EditTelaPopupComponent
  ) {}

  telas: Object;
  telaEditar: object;
  form: FormGroup;

  ngOnInit() {
    this.getTelas();

    this.form = this.fb.group({
      consulta: [null, [Validators.required]]
    });
  }

  getTelas() {
    this.service.getTelas().subscribe(data => {
      this.telas = data;
    });
  }

  searchInTelas(myForm: FormGroup) {
    this.service.searchInTelas(myForm.get("consulta").value).subscribe(data => {
      this.telas = data;
    });
  }

  editaTela(index: number) {
    this.telaEditar = this.telas[index];
    this.popUp.openDialog(
      this.telaEditar["id"],
      this.telaEditar["nombre"],
      this.telaEditar["precio_proveedor"],
      this.telaEditar["pvp"],
      this.telaEditar["tipo"],
      this.telaEditar["comentarios"],
      this.telaEditar["proveedor"]
    );
  }
}
