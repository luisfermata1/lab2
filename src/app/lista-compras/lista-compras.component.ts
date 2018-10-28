import { Component, OnInit, Inject } from '@angular/core';
import { observable, of } from 'rxjs';
import { Pedido } from './pedido';
import { PedidoService } from '../pedido.service';
import { SESSION_STORAGE, StorageService, StorageServiceModule } from 'angular-webstorage-service';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})

export class ListaComprasComponent implements OnInit {
  
  pedidos : Pedido[]; //= this.memoria.get('listapedidos');
  //pedidos2 : Pedido[];

  getPedidos(): void
  {
    
      this.servicio.getPedidos().subscribe(pedidos => this.pedidos = pedidos);
      
      console.log(this.pedidos);
      
  }

  eliminarPedido(i: number){
    const id = this.pedidos[i]._id;
    this.servicio.deletePedido(id);
    //this.servicio.eliminarIndex(i);
    this.load();
  }

  constructor(@Inject(SESSION_STORAGE) private memoria: StorageService, private servicio: PedidoService, private location: Location) { 
    
  }

  ngOnInit(): void {
    this.getPedidos();

  }
  load() {
    location.reload()
    }

}
