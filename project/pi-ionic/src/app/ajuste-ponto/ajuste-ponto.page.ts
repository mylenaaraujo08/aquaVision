import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalDeletarPontoPage } from '../modal-deletar-ponto/modal-deletar-ponto.page';

@Component({
  selector: 'app-ajuste-ponto',
  templateUrl: './ajuste-ponto.page.html',
  styleUrls: ['./ajuste-ponto.page.scss'],
})
export class AjustePontoPage implements OnInit {

  constructor(
    private route: Router,
    private modalCtrl: ModalController
  ) { }


  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalDeletarPontoPage,
      cssClass: 'transparent-modal'
    });

    await modal.present();
    
  }

  goToPage(a: string):void{
    this.route.navigate([a]);
  }

  ngOnInit() {
  }

}
