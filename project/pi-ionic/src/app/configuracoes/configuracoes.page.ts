import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalSairPage } from '../modal-sair/modal-sair.page';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  userData: any;
  
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private user: AuthService
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
    this.userData = this.user.getUserData();
  }

}
