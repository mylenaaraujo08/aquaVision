import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddManualmentePage } from './add-manualmente.page';

const routes: Routes = [
  {
    path: '',
    component: AddManualmentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddManualmentePageRoutingModule {}
