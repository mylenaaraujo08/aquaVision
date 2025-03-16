import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompararDatasPage } from './comparar-datas.page';

const routes: Routes = [
  {
    path: '',
    component: CompararDatasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompararDatasPageRoutingModule {}
