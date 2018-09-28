import { Component, OnInit, Inject } from '@angular/core';
import { observable, of } from 'rxjs';
import { Pedido } from './pedido';
import { SESSION_STORAGE, StorageService, StorageServiceModule } from 'angular-webstorage-service';


@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})

export class ListaComprasComponent implements OnInit {
  
  pedidos : Pedido[] = this.memoria.get('listapedidos');

  constructor(@Inject(SESSION_STORAGE) private memoria: StorageService) { 
    
  }

  ngOnInit() {
    
  }

}
