import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sessionData: any = {};

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  authenticateUser(): void {
    this.apiService.authUser(this.sessionData).subscribe({
      next: (response) => {
        console.log('User authenticated successfully');
        this.router.navigate(['/map']); // Navigate to the dashboard or any other page after successful authentication
      },
      error: (error) => {
        console.error('Error authenticating user', error);
        console.log(this.sessionData)
      }
    });
  }
}
