import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteVacancies: Vacancy[] = [];
  
  // Создаем Subject для отправки уведомлений об изменениях
  private favoritesChangedSubject = new Subject<{id: number, isFavorite: boolean}>();
  
  // Публичный Observable для подписки в компонентах
  favoritesChanged$ = this.favoritesChangedSubject.asObservable();
  
  constructor() {
    this.loadFromLocalStorage();
  }
  
  // Получение всех избранных вакансий
  getFavorites(): Vacancy[] {
    return this.favoriteVacancies;
  }
  
  // Проверка, находится ли вакансия в избранном
  isFavorite(jobId: number): boolean {
    return this.favoriteVacancies.some(vacancy => vacancy.job_id === jobId);
  }
  
  // Добавление вакансии в избранное
  addToFavorites(vacancy: Vacancy): void {
    if (!this.isFavorite(vacancy.job_id)) {
      // Создаем копию объекта и помечаем как избранное
      const vacancyToAdd = {...vacancy, isFavorite: true};
      this.favoriteVacancies.push(vacancyToAdd);
      this.saveToLocalStorage();
      
      // Уведомляем всех подписчиков об изменении
      this.favoritesChangedSubject.next({id: vacancy.job_id, isFavorite: true});
    }
  }
  
  // Удаление вакансии из избранного
  removeFromFavorites(jobId: number): void {
    this.favoriteVacancies = this.favoriteVacancies.filter(
      vacancy => vacancy.job_id !== jobId
    );
    this.saveToLocalStorage();
    
    // Уведомляем всех подписчиков об изменении
    this.favoritesChangedSubject.next({id: jobId, isFavorite: false});
  }
  
  // Переключение статуса избранного
  toggleFavorite(vacancy: Vacancy): boolean {
    if (this.isFavorite(vacancy.job_id)) {
      this.removeFromFavorites(vacancy.job_id);
      return false;
    } else {
      this.addToFavorites(vacancy);
      return true;
    }
  }
  
  // Сохранение в локальное хранилище
  private saveToLocalStorage(): void {
    localStorage.setItem('favoriteVacancies', JSON.stringify(this.favoriteVacancies));
  }
  
  // Загрузка из локального хранилища
  private loadFromLocalStorage(): void {
    const saved = localStorage.getItem('favoriteVacancies');
    if (saved) {
      this.favoriteVacancies = JSON.parse(saved);
    }
  }
}