import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSensorPageRoutingModule } from './cadastro-sensor-routing.module';

import { CadastroSensorPage } from './cadastro-sensor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSensorPageRoutingModule
  ],
  declarations: [CadastroSensorPage]
})
export class CadastroSensorPageModule {}
