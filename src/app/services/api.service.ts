import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // заглушка для будущей интеграции
  createUser(role: string, name: string): Observable<any> {
    console.log('API: Creating user', { role, name });
    return of({ success: true });
  }
}