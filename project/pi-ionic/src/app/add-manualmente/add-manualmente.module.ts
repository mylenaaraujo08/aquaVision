import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddManualmentePageRoutingModule } from './add-manualmente-routing.module';

import { AddManualmentePage } from './add-manualmente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddManualmentePageRoutingModule
  ],
  declarations: [AddManualmentePage]
})
export class AddManualmentePageModule {}
