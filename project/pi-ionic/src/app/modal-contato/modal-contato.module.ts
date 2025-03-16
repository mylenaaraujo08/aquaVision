import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContatoPageRoutingModule } from './modal-contato-routing.module';

import { ModalContatoPage } from './modal-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalContatoPageRoutingModule
  ],
  declarations: [ModalContatoPage]
})
export class ModalContatoPageModule {}
