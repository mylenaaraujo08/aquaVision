import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  userData: any = {};

  constructor(private apiService: ApiService, private router: Router) { }

  register() {
    if (this.userData.password !== this.userData.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    this.apiService.createUser(this.userData).subscribe({
      next: (response) => {
        console.log('User registered successfully');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error registering user', error);
      }
    });
  }
}
