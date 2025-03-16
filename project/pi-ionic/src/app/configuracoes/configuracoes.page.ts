import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalSairPage } from '../modal-sair/modal-sair.page';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ModalSairPage,
      cssClass: 'transparent-modal'
    })

    await modal.present();
  }

  goToPage(a: string):void{
    this.router.navigate([a]);
  };

  

  ngOnInit() {
  }

}
