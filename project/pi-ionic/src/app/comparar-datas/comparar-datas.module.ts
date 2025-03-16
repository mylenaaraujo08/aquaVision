import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompararDatasPageRoutingModule } from './comparar-datas-routing.module';

import { CompararDatasPage } from './comparar-datas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompararDatasPageRoutingModule
  ],
  declarations: [CompararDatasPage]
})
export class CompararDatasPageModule {}
