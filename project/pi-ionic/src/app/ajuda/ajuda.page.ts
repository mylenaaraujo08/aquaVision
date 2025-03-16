import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalContatoPage } from '../modal-contato/modal-contato.page';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {

  constructor(
    private router: Router,
    private modalCtlr: ModalController
  ) { }

  goToPage(a:string):void{
    this.router.navigate([a]);
  }

  async openModal(){
    const modal = await this.modalCtlr.create({
      component: ModalContatoPage,
      cssClass: 'transparent-modal'
    });

    await modal.present();
  }

  ngOnInit() {
  }

}
