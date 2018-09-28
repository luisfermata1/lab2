import { Injectable, Inject } from '@angular/core';
import { observable, of } from 'rxjs';
import { Pedido } from './lista-compras/pedido';
import { SESSION_STORAGE, StorageService, StorageServiceModule } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  agregarPedido (pedido: Pedido)
  {
    let llave =  'listapedidos';
    
    console.log(this.memoria.get(llave) || []);

    let listaActualPedidos = this.memoria.get(llave) || [];

    listaActualPedidos.push(pedido);

    this.memoria.set(llave, listaActualPedidos);

    console.log(this.memoria.get(llave) || []);

  }


  constructor(@Inject(SESSION_STORAGE) private memoria: StorageService) { 

  }
}
