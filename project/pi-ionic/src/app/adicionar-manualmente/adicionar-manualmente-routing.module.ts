import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarManualmentePage } from './adicionar-manualmente.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarManualmentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarManualmentePageRoutingModule {}
