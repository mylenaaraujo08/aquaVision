import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddManualPageRoutingModule } from './modal-add-manual-routing.module';

import { ModalAddManualPage } from './modal-add-manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddManualPageRoutingModule
  ],
  declarations: [ModalAddManualPage]
})
export class ModalAddManualPageModule {}
