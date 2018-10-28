import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { Pedido } from '../lista-compras/pedido';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  pedido: Pedido; 
    _id: string;
    name: string;
    cantidad: number;
    color: string;
    capacidad: string;
    descripcion: string;
  closeResult: string;
  agregarPedido()
  {
    this.pedido = {
      _id: this._id,
      name: this.name,
      cant: this.cantidad,
      color: this.color,
      capac: this.capacidad,
      descr: this.descripcion
    };
    let salida = this.servicio.createPedido(this.pedido);
    console.log(salida);
    //this.servicio.agregarPedido(this.pedido);
    document.getElementById("openM").click();
  }
  constructor(
    private servicio: PedidoService,
    private modalService: NgbModal
    ) { }

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    openSm(content) {
      this.modalService.open(content, { size: 'sm' });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  ngOnInit() {
  }

}
