import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustePontoPageRoutingModule } from './ajuste-ponto-routing.module';

import { AjustePontoPage } from './ajuste-ponto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustePontoPageRoutingModule
  ],
  declarations: [AjustePontoPage]
})
export class AjustePontoPageModule {}
