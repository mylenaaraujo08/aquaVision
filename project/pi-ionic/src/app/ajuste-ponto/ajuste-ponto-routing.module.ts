import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustePontoPage } from './ajuste-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: AjustePontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustePontoPageRoutingModule {}
