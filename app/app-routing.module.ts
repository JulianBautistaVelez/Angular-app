import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaMovimientosComponent } from './pagina-movimientos/pagina-movimientos.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaClientesComponent } from './pagina-clientes/pagina-clientes.component';
import { PaginaTelasComponent } from './pagina-telas/pagina-telas.component';

const routes: Routes = [
  { path: 'ver-movimientos', component: PaginaMovimientosComponent },
  { path: 'ver-clientes', component: PaginaClientesComponent },
  { path: 'ver-telas', component: PaginaTelasComponent },
  { path: '', component: PaginaInicialComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
