import { Injectable } from '@angular/core';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteVacancies: Vacancy[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  getFavorites(): Vacancy[] {
    return this.favoriteVacancies;
  }

  isFavorite(jobId: number):boolean {
    return this.favoriteVacancies.some(vacancy => vacancy.job_id === jobId);
  }

  addToFavorites(vacancy: Vacancy): void {
    if (!this.isFavorite(vacancy.job_id)) {
      const vacancyToAdd = {...vacancy, isFavorite: true};
      this.favoriteVacancies.push(vacancyToAdd);
      this.saveToLocalStorage();
    }
  }

  removeFromFavorites(jobId: number): void {
    this.favoriteVacancies = this.favoriteVacancies.filter(
      vacancy => vacancy.job_id !== jobId
    );
    this.saveToLocalStorage();
  }

  toggleFavorite(vacancy: Vacancy): boolean {
    if (this.isFavorite(vacancy.job_id)) {
      this.removeFromFavorites(vacancy.job_id);
      return false
    } else {
      this.addToFavorites(vacancy);
      return true;
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('favoriteVacancies', JSON.stringify(this.favoriteVacancies));
  }

  private loadFromLocalStorage():void {
    const saved = localStorage.getItem('favoriteVacancies');
    if (saved) {
      this.favoriteVacancies = JSON.parse(saved)
    }
  }
}
