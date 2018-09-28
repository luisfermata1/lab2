import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../lista-compras/pedido';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  pedido: Pedido; 
    name: string;
    cantidad: number;
    color: string;
    capacidad: string;
    descripcion: string;

  agregarPedido()
  {
    this.pedido = {
      name: this.name,
      cant: this.cantidad,
      color: this.color,
      capac: this.capacidad,
      descr: this.descripcion
    };

    this.servicio.agregarPedido(this.pedido);
    
  }
  constructor(private servicio: PedidoService) { }

  ngOnInit() {
  }

}
