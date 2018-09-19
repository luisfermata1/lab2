import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    ListaComprasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
