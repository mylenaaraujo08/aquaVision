import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarManualmentePageRoutingModule } from './adicionar-manualmente-routing.module';

import { AdicionarManualmentePage } from './adicionar-manualmente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarManualmentePageRoutingModule
  ],
  declarations: [AdicionarManualmentePage]
})
export class AdicionarManualmentePageModule {}
