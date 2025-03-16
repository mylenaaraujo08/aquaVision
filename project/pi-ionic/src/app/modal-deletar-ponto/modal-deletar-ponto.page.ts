import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-deletar-ponto',
  templateUrl: './modal-deletar-ponto.page.html',
  styleUrls: ['./modal-deletar-ponto.page.scss'],
})
export class ModalDeletarPontoPage implements OnInit {

  constructor(
    private modalCtlr: ModalController,
    private router: Router
  ) { }

  goToPage(a:string):void{
    this.router.navigate([a]);
    this.modalCtlr.dismiss();
  }

  cancelar(){
    this.modalCtlr.dismiss();
  }

  ngOnInit() {
  }

}
