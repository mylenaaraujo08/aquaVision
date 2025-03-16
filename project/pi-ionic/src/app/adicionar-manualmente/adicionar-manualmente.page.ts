import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalAddManualPage } from '../modal-add-manual/modal-add-manual.page';

@Component({
  selector: 'app-adicionar-manualmente',
  templateUrl: './adicionar-manualmente.page.html',
  styleUrls: ['./adicionar-manualmente.page.scss'],
})
export class AdicionarManualmentePage implements OnInit {

  constructor(
    private router: Router,
    private modalCtlr: ModalController
  ) { }

  async openModal(){
    const modal = await this.modalCtlr.create({
      component: ModalAddManualPage,
      cssClass: 'transparent-modal'
    });

    await modal.present();
  }

  goToPage(a: string):void{
    this.router.navigate([a])
  }

  ngOnInit() {
  }

}
