import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sessionData: any = {};

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  authenticateUser(): void {
    this.apiService.authUser(this.sessionData).subscribe({
      next: (response) => {
        console.log('User authenticated successfully');
        this.authService.setUserData(response); // Save the user data
        this.router.navigate(['/map']); // Navigate to the dashboard or any other page after successful authentication
      },
      error: (error) => {
        console.error('Error authenticating user', error);
      }
    });
  }
}
