import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-manual',
  templateUrl: './modal-add-manual.page.html',
  styleUrls: ['./modal-add-manual.page.scss'],
})
export class ModalAddManualPage implements OnInit {
  parametroData: any;

  constructor(
    private modalCtlr: ModalController,
    private router: Router,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.parametroData = this.navParams.get('parametroData');
    console.log('Dados recebidos:', this.parametroData);
  }

  goToPage(a: string): void {
    this.router.navigate([a]);
    this.modalCtlr.dismiss();
  }

  cancelar() {
    this.modalCtlr.dismiss();
  }
}
