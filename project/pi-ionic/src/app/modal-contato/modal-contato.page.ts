import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-contato',
  templateUrl: './modal-contato.page.html',
  styleUrls: ['./modal-contato.page.scss'],
})
export class ModalContatoPage implements OnInit {

  constructor(
    private modalCtlr: ModalController
  ) { }

  cancelar(){
    this.modalCtlr.dismiss();
  }

  ngOnInit() {
  }

}
