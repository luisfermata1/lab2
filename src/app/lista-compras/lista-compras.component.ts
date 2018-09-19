import { Component, OnInit } from '@angular/core';
import { PEDIDOS } from './mock-pedidos';



@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})

export class ListaComprasComponent implements OnInit {
  
  pedidos = PEDIDOS;
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
