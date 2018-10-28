import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pedido } from './lista-compras/pedido';
import { SESSION_STORAGE, StorageService, StorageServiceModule } from 'angular-webstorage-service';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  //Obtener todos los pedidos
  getPedidos(): Observable<Pedido[]>
  {
    
      var req = new XMLHttpRequest();
      req.open('GET', 'http://localhost:3000/api/v1/pedido/', false);
      
      req.send(null);
      
      if (req.status == 200)
      {
        alert("entro");
        var jsonArray = JSON.parse(req.responseText);
        return of(jsonArray);
      }
      else
      {
        
        return of([]);
      }

  }





  //manejo de local storage
  agregarPedido (pedido: Pedido)
  {
    let llave =  'listapedidos';
    
    console.log(this.memoria.get(llave) || []);

    let listaActualPedidos = this.memoria.get(llave) || [];

    listaActualPedidos.push(pedido);

    this.memoria.set(llave, listaActualPedidos);

    console.log(this.memoria.get(llave) || []);

  }

  eliminarIndex(i: number){
    let llave =  'listapedidos';
    let listaActualPedidos = this.memoria.get(llave);
    let listaNuevoPedidos = [];

    for(var _i = 0; _i < listaActualPedidos.length; _i++){
      if(_i !== i)
        listaNuevoPedidos.push(listaActualPedidos[_i]);
    }

    this.memoria.set(llave, listaNuevoPedidos);
  }

  updatePedido(index: number, pedido : Pedido){
    let llave =  'listapedidos';
    let listaPedidos = this.memoria.get(llave);
    listaPedidos[index] = pedido;

    this.memoria.set(llave, listaPedidos);
    
  }


  constructor(@Inject(SESSION_STORAGE) private memoria: StorageService) { 

  }
}
