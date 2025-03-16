import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDeletarPontoPage } from './modal-deletar-ponto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDeletarPontoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDeletarPontoPageRoutingModule {}
