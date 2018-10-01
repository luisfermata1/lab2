import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './carousel/carousel.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormActualizarComponent } from './form-actualizar/form-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    ListaComprasComponent,
    CarouselComponent,
    FormActualizarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
