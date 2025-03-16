import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSairPageRoutingModule } from './modal-sair-routing.module';

import { ModalSairPage } from './modal-sair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSairPageRoutingModule
  ],
  declarations: [ModalSairPage]
})
export class ModalSairPageModule {}
