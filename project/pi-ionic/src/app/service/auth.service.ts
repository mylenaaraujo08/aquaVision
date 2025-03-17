import { Injectable } from '@angular/core';

interface UserResponse{
  id: number;
  nome: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: any;

  constructor() { }

  setUserData(data: any): void {
    this.userData = data;
  }

  getUserData(): any {
    return this.userData;
  }

  isAuthenticated(): boolean {
    return !!this.userData;
  }
}
