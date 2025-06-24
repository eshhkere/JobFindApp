import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.model';
import { FavoritesService } from './favorites.service';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  // Тестовые данные вакансий
  private vacanciesData: Vacancy[] = [
    {
      job_id: 1,
      employer_id: 101,
      title: '1 Срочно нужно сделать карточки маркетплейсов для вб',
      category: 'Дизайн',
      description: 'Подробное описание вакансии...',
      salary: 500,
      date: '2023-05-20',
      time_start: '10:00',
      time_end: '12:00',
      address: 'ул.Ямашева 12',
      rating: 4.5,
      is_urgent: true,
      status: 'open',
      created_at: '2023-05-15',
      isFavorite: false
    },

    {
      job_id: 2,
      employer_id: 101,
      title: '2 Срочно нужно сделать карточки маркетплейсов для вб',
      category: 'Дизайн',
      description: 'Подробное описание вакансии...',
      salary: 500,
      date: '2023-05-20',
      time_start: '10:00',
      time_end: '12:00',
      address: 'ул.Ямашева 12',
      rating: 4.5,
      is_urgent: false,
      status: 'open',
      created_at: '2023-05-15',
      isFavorite: false
    },

    {
      job_id: 3,
      employer_id: 101,
      title: '3 Срочно нужно сделать карточки маркетплейсов для вб',
      category: 'Дизайн',
      description: 'Подробное описание вакансии...',
      salary: 500,
      date: '2023-05-20',
      time_start: '10:00',
      time_end: '12:00',
      address: 'ул.Ямашева 12',
      rating: 4.5,
      is_urgent: true,
      status: 'open',
      created_at: '2023-05-15',
      isFavorite: false
    },

    {
      job_id: 4,
      employer_id: 101,
      title: '4 Срочно нужно сделать карточки маркетплейсов для вб',
      category: 'Дизайн',
      description: 'Подробное описание вакансии...',
      salary: 500,
      date: '2023-05-20',
      time_start: '10:00',
      time_end: '12:00',
      address: 'ул.Ямашева 12',
      rating: 4.5,
      is_urgent: false,
      status: 'open',
      created_at: '2023-05-15',
      isFavorite: false
    },
    // Добавьте другие тестовые вакансии
  ];

  constructor(private favoritesService: FavoritesService) {
    // Проверяем статус избранного для каждой вакансии
    this.checkFavoriteStatus();
    
    // Подписываемся на изменения в избранном
    this.favoritesService.favoritesChanged$.subscribe(change => {
      this.updateFavoriteStatus(change.id, change.isFavorite);
    });
  }

  // Получение всех вакансий
  getAllVacancies(): Vacancy[] {
    return this.vacanciesData;
  }

  // Получение вакансии по ID
  getVacancyById(id: number): Vacancy | undefined {
    return this.vacanciesData.find(v => v.job_id === id);
  }

  // Обновление статуса избранного
  private updateFavoriteStatus(id: number, isFavorite: boolean): void {
    const vacancy = this.getVacancyById(id);
    if (vacancy) {
      vacancy.isFavorite = isFavorite;
    }
  }

  // Проверка статуса избранного для всех вакансий
  private checkFavoriteStatus(): void {
    this.vacanciesData.forEach(vacancy => {
      vacancy.isFavorite = this.favoritesService.isFavorite(vacancy.job_id);
    });
  }

  // Переключение статуса избранного
  toggleFavorite(id: number): boolean {
    const vacancy = this.getVacancyById(id);
    if (vacancy) {
      return this.favoritesService.toggleFavorite(vacancy);
    }
    return false;
  }

  getEmployerAnnouncements(): Vacancy[] {
    // тестовый id
    const employerId = 101;
    return this.vacanciesData.filter(v => v.employer_id === employerId);
  }
}