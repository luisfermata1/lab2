import { Component, OnInit, Inject, Input } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService, StorageServiceModule } from 'angular-webstorage-service';
import { Pedido } from '../lista-compras/pedido';
import { PedidoService } from '../pedido.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-actualizar',
  templateUrl: './form-actualizar.component.html',
  styleUrls: ['./form-actualizar.component.css']
})
export class FormActualizarComponent implements OnInit {
  closeResult: string;
  @Input() pedido:Pedido; 

  constructor(
    private route: ActivatedRoute,
    @Inject(SESSION_STORAGE) private memoria: StorageService,
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

    document.getElementById("openM").click();
  }

}
