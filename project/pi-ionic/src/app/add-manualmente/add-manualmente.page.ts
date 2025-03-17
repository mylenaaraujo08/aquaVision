import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

interface ParametroConfig {
  enabled: boolean;
  min: number;
  max: number;
}

interface Parametros {
  ph: ParametroConfig;
  turbidez: ParametroConfig;
  temperatura: ParametroConfig;
  condutividade: ParametroConfig;
  salinidade: ParametroConfig;
  oxigenio: ParametroConfig;
}

interface PontoParametro {
  [key: string]: number;
}

interface Ponto {
  id: number;
  parametro: PontoParametro[];
}

@Component({
  selector: 'app-add-manualmente',
  templateUrl: './add-manualmente.page.html',
  styleUrls: ['./add-manualmente.page.scss'],
})
export class AddManualmentePage implements OnInit {
  pontos: any[] = [];
  parametros = {
    ph: { enabled: false, min: 0, max: 0 },
    turbidez: { enabled: false, min: 0, max: 0 },
    temperature: { enabled: false, min: 0, max: 0 },
    condutividade: { enabled: false, min: 0, max: 0 },
    salinidade: { enabled: false, min: 0, max: 0 },
    oxigenioDissolvido: { enabled: false, min: 0, max: 0 }
  };
  pontoId: number | null = null;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const userData = this.authService.getUserData();
    this.apiService.listPontos(userData.id).subscribe({
      next: (response) => {
        this.pontos = response;
      },
      error: (error) => {
        console.error('Erro ao carregar pontos:', error);
      }
    });
  }

  createMonitoramento(): void {
    if (!this.pontoId) {
      console.error('Selecione um ponto de monitoramento');
      return;
    }

    const selectedPonto = this.pontos.find(p => p.id === this.pontoId);
    if (!selectedPonto) {
      console.error('Ponto não encontrado');
      return;
    }

    const pontoParametro = selectedPonto.parametro[0] || {};
    console.log('Ponto parâmetro:', pontoParametro);

    // Check for undefined parameters
    const undefinedParams: (keyof Parametros)[] = [];
    Object.entries(this.parametros)
      .filter(([key, value]) => value.enabled)
      .forEach(([key]) => {
        if (pontoParametro[key] === undefined) {
          undefinedParams.push(key as keyof Parametros);
        }
      });

    if (undefinedParams.length > 0) {
      console.error('Parâmetros indefinidos:', undefinedParams);
      return;
    }

    // Iterate over each parameter
    Object.entries(this.parametros)
      .filter(([key, value]) => value.enabled)
      .forEach(([key, value]) => {
      const monitoramentoData = {
        pontoId: this.pontoId,
        tipo: key,
        pontoAlerta: (() => {
        const currentValue = pontoParametro[key];
        return currentValue > value.max ? 'Alto' : 'Baixo';
        })(),
        situacao: (() => {
        const currentValue = pontoParametro[key];
        return currentValue > value.max ? 'ALERTA' : 'NORMAL';
        })(),
        Maximo: value.max,
        Minimo: value.min
      };

      this.apiService.createMonitoramento(monitoramentoData).subscribe({
        next: (response) => {
        console.log(`Monitoramento para ${key} criado com sucesso:`, response);
        },
        error: (error) => {
        console.error(`Erro ao criar monitoramento para ${key}:`, error);
        }
      });
    });

    // Navigate after all monitoring entries are created
    this.router.navigate(['/ajuste-ponto']);
  }

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
}
