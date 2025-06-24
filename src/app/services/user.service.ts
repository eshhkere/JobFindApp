import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USER_ROLE_KEY = 'user_role';
  private readonly USER_NAME_KEY = 'user_name';
  private readonly TG_ID_KEY = 'tg_id';

  private apiUrl = 'http://192.168.191.65:8000'

  constructor(private http: HttpClient) { }

  getUserRole():string {
    return localStorage.getItem(this.USER_ROLE_KEY) || '';
  }

  getUserName(): string {
    return localStorage.getItem(this.USER_NAME_KEY) || '';
  }

  getTgId(): string {
    return localStorage.getItem(this.TG_ID_KEY) || '';
  }

  saveUserRole(role: string): void {
    localStorage.setItem(this.USER_ROLE_KEY, role)
  }

  saveUserName(name: string): void {
    localStorage.setItem(this.USER_NAME_KEY, name);
  }

  saveTgId(tgId: string): void {
    localStorage.setItem(this.TG_ID_KEY, tgId);
  }

  registerUser(): Observable<any> {
    const userData = {
      tg: this.getTgId(),
      user_role: this.getUserRole(),
      user_name: this.getUserName()
    };

    return this.http.post(`${this.apiUrl}/profile/init`, userData);
  }
}
