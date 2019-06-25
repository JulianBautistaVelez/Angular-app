import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import * as PlotlyJS from "plotly.js/dist/plotly.js";
import { PlotlyModule } from "angular-plotly.js";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatTableModule,
  MatStepperModule,
  MatNativeDateModule,
  MatDatepickerModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { VistaDineroComponent } from "./vista-dinero/vista-dinero.component";
import { FlujoDineroComponent } from "./flujo-dinero/flujo-dinero.component";
import { VistaClientesComponent } from "./vista-clientes/vista-clientes.component";
import { ListaClientesComponent } from "./lista-clientes/lista-clientes.component";
import { ToastrNotificationComponent } from "./toastr-notification/toastr-notification.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PaginaMovimientosComponent } from "./pagina-movimientos/pagina-movimientos.component";
import { PaginaInicialComponent } from "./pagina-inicial/pagina-inicial.component";

import { registerLocaleData } from "@angular/common";
import locale419 from "@angular/common/locales/es-419";
import { PaginaClientesComponent } from "./pagina-clientes/pagina-clientes.component";
import { LayoutModule } from "@angular/cdk/layout";
import { InsertClientPopupComponent } from "./insert-client-popup/insert-client-popup.component";
import { InsertClienteDialogRefComponent } from "./insert-cliente-dialog-ref/insert-cliente-dialog-ref.component";
import { VistaTelasComponent } from "./vista-telas/vista-telas.component";
import { PaginaTelasComponent } from "./pagina-telas/pagina-telas.component";
import { EditTelaPopupComponent } from "./edit-tela-popup/edit-tela-popup.component";
import { EditTelaDialogRefComponent } from "./edit-tela-dialog-ref/edit-tela-dialog-ref.component";
import { PaginaCrearFacturasComponent } from "./pagina-crear-facturas/pagina-crear-facturas.component";
import { PaginaGraficosComponent } from "./pagina-graficos/pagina-graficos.component";
import { MoverDineroDialogRefComponent } from "./mover-dinero-dialog-ref/mover-dinero-dialog-ref.component";
import { MoverDineroPopupComponent } from "./mover-dinero-popup/mover-dinero-popup.component";
registerLocaleData(locale419, "es-419");
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    VistaDineroComponent,
    FlujoDineroComponent,
    VistaClientesComponent,
    ListaClientesComponent,
    ToastrNotificationComponent,
    NavBarComponent,
    PaginaMovimientosComponent,
    PaginaInicialComponent,
    PaginaClientesComponent,
    InsertClientPopupComponent,
    InsertClienteDialogRefComponent,
    VistaTelasComponent,
    PaginaTelasComponent,
    EditTelaPopupComponent,
    EditTelaDialogRefComponent,
    PaginaCrearFacturasComponent,
    PaginaGraficosComponent,
    MoverDineroDialogRefComponent,
    MoverDineroPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
    PlotlyModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-419" }],
  bootstrap: [AppComponent],
  entryComponents: [
    InsertClientPopupComponent,
    InsertClienteDialogRefComponent,
    EditTelaPopupComponent,
    EditTelaDialogRefComponent,
    MoverDineroPopupComponent,
    MoverDineroDialogRefComponent
  ]
})
export class AppModule {}
