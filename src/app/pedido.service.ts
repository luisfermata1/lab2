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
        var jsonArray = JSON.parse(req.responseText);
        return of(jsonArray);
      }
      else
      {
        return of([]);
      }

  }

  //obtener solo un elemento por su id para poder modificar su info
  getPedido(id: string): Observable<Pedido> {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3000/api/v1/pedido/'+id, false);
    req.send(null);
    if (req.status == 200)
    {
      
      var json = JSON.parse(req.responseText);
      //console.log(json);
      return of(json);
    }
    else
    {
      return of();
    }
  }

  //Crear un pedido desde la api
  createPedido(pedido:Pedido): Observable<Pedido[]> {
    var req = new XMLHttpRequest();
    req.open('POST', 'http://localhost:3000/api/v1/pedido', true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(pedido));
    return of([]);
   }

   //actualizar el pedido por servicio de Api
   updatePedido(pedido:Pedido): Observable<Pedido[]> {
    var _id = pedido._id;
    var req = new XMLHttpRequest();
    req.open('PUT', 'http://localhost:3000/api/v1/pedido/'+_id, true);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(pedido));
    return of([]);
 
   }

   deletePedido(id:string): Observable<Pedido[]> {
    var req = new XMLHttpRequest();
    req.open('DELETE', 'http://localhost:3000/api/v1/pedido/'+id, false);
    req.send(null);
    if (req.status == 200)
    {
      return of();
    }
    else
    {
      return of();
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

  updatePedido_m(index: number, pedido : Pedido){
    let llave =  'listapedidos';
    let listaPedidos = this.memoria.get(llave);
    listaPedidos[index] = pedido;

    this.memoria.set(llave, listaPedidos);
    
  }


  constructor(@Inject(SESSION_STORAGE) private memoria: StorageService) { 

  }
}
