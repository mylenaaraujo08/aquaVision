import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSairPage } from './modal-sair.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSairPageRoutingModule {}
