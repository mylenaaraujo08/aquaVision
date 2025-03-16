import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddManualPage } from './modal-add-manual.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddManualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddManualPageRoutingModule {}
