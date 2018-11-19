import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaComprasComponent }   from './lista-compras/lista-compras.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormActualizarComponent } from './form-actualizar/form-actualizar.component';

const routes: Routes = [
  { path: 'listapedidos', component: ListaComprasComponent },
  { path: 'agregar', component: FormularioComponent },
  { path: 'modificar/:id', component: FormActualizarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }





