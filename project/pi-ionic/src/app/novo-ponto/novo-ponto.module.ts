import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoPontoPageRoutingModule } from './novo-ponto-routing.module';

import { NovoPontoPage } from './novo-ponto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoPontoPageRoutingModule
  ],
  declarations: [NovoPontoPage]
})
export class NovoPontoPageModule {}
