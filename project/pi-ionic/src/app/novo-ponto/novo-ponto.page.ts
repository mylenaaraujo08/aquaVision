import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-novo-ponto',
  templateUrl: './novo-ponto.page.html',
  styleUrls: ['./novo-ponto.page.scss'],
})
export class NovoPontoPage implements OnInit {
  pontoData: any = {
    nome: '',
    latitude: '',
    longitude: '',
    ip: '',
    tipo: 'RIO'
  };
  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  goToPage(a: string): void {
    this.router.navigate([a]);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  createPonto(): void {
    if (this.selectedFile) {
      const userData = this.authService.getUserData();
      this.pontoData.user_id = userData.id;
      this.pontoData.tipo = this.pontoData.tipo?.toUpperCase() ?? 'RIO';

      this.apiService.createPonto(this.pontoData, this.selectedFile).subscribe({
        next: (response) => {
          console.log('Ponto criado com sucesso:');
          this.router.navigate(['/map']);
        },
        error: (error) => {
          console.error('Erro ao criar ponto:', error);
        }
      });
    }
  }

  ngOnInit() {
  }
}
