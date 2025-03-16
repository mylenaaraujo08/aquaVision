import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'comparar-datas',
    loadChildren: () => import('./comparar-datas/comparar-datas.module').then( m => m.CompararDatasPageModule)
  },
  {
    path: 'ajuste-ponto',
    loadChildren: () => import('./ajuste-ponto/ajuste-ponto.module').then( m => m.AjustePontoPageModule)
  },
  {
      path: 'cadastro',
      loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)   
  },
  {
    path: 'cadastro-sensor',
    loadChildren: () => import('./cadastro-sensor/cadastro-sensor.module').then( m => m.CadastroSensorPageModule)
  },
  {
    path: 'adicionar-manualmente',
    loadChildren: () => import('./adicionar-manualmente/adicionar-manualmente.module').then( m => m.AdicionarManualmentePageModule)
  },
  {
    path: 'add-manualmente',
    loadChildren: () => import('./add-manualmente/add-manualmente.module').then( m => m.AddManualmentePageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'monitoramento',
    loadChildren: () => import('./monitoramento/monitoramento.module').then( m => m.MonitoramentoPageModule)
  },
  {
    path: 'novo-ponto',
    loadChildren: () => import('./novo-ponto/novo-ponto.module').then( m => m.NovoPontoPageModule)
  },
  {
    path: 'modal-sair',
    loadChildren: () => import('./modal-sair/modal-sair.module').then( m => m.ModalSairPageModule)
  },
  {
    path: 'modal-deletar-ponto',
    loadChildren: () => import('./modal-deletar-ponto/modal-deletar-ponto.module').then( m => m.ModalDeletarPontoPageModule)
  },
  {
    path: 'modal-add-manual',
    loadChildren: () => import('./modal-add-manual/modal-add-manual.module').then( m => m.ModalAddManualPageModule)
  },
  {
    path: 'modal-contato',
    loadChildren: () => import('./modal-contato/modal-contato.module').then( m => m.ModalContatoPageModule)
  },  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
