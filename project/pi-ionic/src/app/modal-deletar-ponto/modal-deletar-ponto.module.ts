import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDeletarPontoPageRoutingModule } from './modal-deletar-ponto-routing.module';

import { ModalDeletarPontoPage } from './modal-deletar-ponto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDeletarPontoPageRoutingModule
  ],
  declarations: [ModalDeletarPontoPage]
})
export class ModalDeletarPontoPageModule {}
