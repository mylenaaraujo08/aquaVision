import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.page.html',
  styleUrls: ['./monitoramento.page.scss'],
})
export class MonitoramentoPage implements OnInit {
  pontos: any[] = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit() {
    //const userData = this.authService.getUserData();
    this.apiService.listPontos(1).subscribe({
      next: (response: any[]) => {
        this.pontos = response.filter(ponto => ponto.monitoramento[0]?.situacao === 'ALERTA');
        console.log(this.pontos)
      },
      error: (error) => {
        console.error('Error fetching pontos', error);
      }
    });
  }
}
