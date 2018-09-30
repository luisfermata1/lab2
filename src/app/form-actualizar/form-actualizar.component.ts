import { Component, OnInit, Inject, Input } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService, StorageServiceModule } from 'angular-webstorage-service';
import { Pedido } from '../lista-compras/pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-form-actualizar',
  templateUrl: './form-actualizar.component.html',
  styleUrls: ['./form-actualizar.component.css']
})
export class FormActualizarComponent implements OnInit {

  @Input() pedido:Pedido; 

  constructor(
    private route: ActivatedRoute,
    @Inject(SESSION_STORAGE) private memoria: StorageService,
    private servicio: PedidoService
    ) { }

  ngOnInit() {
    this.getPedido();
  }

  getPedido() : void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.pedido= this.memoria.get('listapedidos')[id];
  }

  actualizarPedido() : void {
    const id = this.route.snapshot.paramMap.get('id');
    var id2 = +id;
    
    this.servicio.updatePedido(id2, this.pedido)
  }

}
