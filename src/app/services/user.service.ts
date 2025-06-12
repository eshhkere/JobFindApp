import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  getUserRole():string {
    return localStorage.getItem('userRole') || '';
  }

  getUserName(): string {
    return localStorage.getItem('userName') || '';
  }

  saveUserRole(role: string): void {
    localStorage.setItem('UserRole', role)
  }

  saveUserName(name: string): void {
    localStorage.setItem('userName', name);
  }

  isProfileCompleted(): boolean {
    return !!this.getUserRole() && !!this.getUserName();
  }
}
