import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-sair',
  templateUrl: './modal-sair.page.html',
  styleUrls: ['./modal-sair.page.scss'],
})
export class ModalSairPage implements OnInit {

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
