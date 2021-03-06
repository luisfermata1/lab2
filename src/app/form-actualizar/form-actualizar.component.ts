import { Component, OnInit, Inject, Input } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService, StorageServiceModule } from 'angular-webstorage-service';
import { Pedido } from '../lista-compras/pedido';
import { PedidoService } from '../pedido.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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
    private modalService: NgbModal,
    private router: Router
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
      setTimeout(() => {
        this.modalService.dismissAll();
        this.router.navigate(['/listapedidos']);
     }, 2000);
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
    this.servicio.getPedido(id).subscribe(pedido => this.pedido = pedido);
    console.log(this.pedido);
  }

  actualizarPedido() : void {
    //const id = this.route.snapshot.paramMap.get('id');
    this.servicio.updatePedido(this.pedido);
    console.log(this.pedido)
    //var id2 = +id;
    
    //this.servicio.updatePedido(id2, this.pedido)

    document.getElementById("openM").click();
  }

}
