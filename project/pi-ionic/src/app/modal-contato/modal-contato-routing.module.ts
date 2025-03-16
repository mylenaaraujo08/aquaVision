import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalContatoPage } from './modal-contato.page';

const routes: Routes = [
  {
    path: '',
    component: ModalContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalContatoPageRoutingModule {}
