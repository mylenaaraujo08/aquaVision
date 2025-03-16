import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoPontoPage } from './novo-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: NovoPontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoPontoPageRoutingModule {}
