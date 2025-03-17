import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalAddManualPage } from '../modal-add-manual/modal-add-manual.page';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-adicionar-manualmente',
  templateUrl: './adicionar-manualmente.page.html',
  styleUrls: ['./adicionar-manualmente.page.scss'],
})
export class AdicionarManualmentePage implements OnInit {
  pontos: any[] = [];
  parametroData = {
    ph: 0,
    temperature: 0,
    salinidade: 0,
    turbidez: 0,
    condutividade: 0,
    oxigenioDissolvido: 0,
    pontoId: null,
    data: new Date().toISOString()
  };

  constructor(
    private router: Router,
    private modalCtlr: ModalController,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  async openModal() {
    const modal = await this.modalCtlr.create({
      component: ModalAddManualPage,
      cssClass: 'transparent-modal',
      componentProps: {
        parametroData: this.parametroData
      }
    });
  
    await modal.present();
  }

  createParametro(): void {
    if (!this.parametroData.pontoId) {
      console.error('Por favor, selecione um ponto de monitoramento');
      return;
    }

    const parametro = {
      ...this.parametroData,
      ponto_id: Number(this.parametroData.pontoId),
      data: new Date().toISOString() // Ensures we get the current date/time
    };

    this.apiService.createParametro(parametro).subscribe({
      next: (response) => {
        console.log('Parâmetro criado com sucesso:', response);
        this.openModal();
        this.router.navigate(['/ajuste-ponto']);
      },
      error: (error) => {
        console.error('Erro ao criar parâmetro:', error);
      }
    });
  }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }

  ngOnInit() {
    const userData = this.authService.getUserData();
    this.apiService.listPontos(userData.id).subscribe({
      next: (response) => {
        console.log('Pontos carregados:', response);
        this.pontos = response;
      },
      error: (error) => {
        console.error('Erro ao carregar pontos:', error);
      }
    });
  }
}
