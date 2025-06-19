import { Component, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    // тестовые данные
    this.vacancies = [
      {
        job_id: 1,
        employer_id: 101,
        title: 'Срочно нужно сделать карточки маркетплейсов для вб',
        category: 'Дизайн',
        description: 'Подробное описание вакансии..',
        salary: 500,
        date: '2025-19-06',
        time_start: '10:00',
        time_end: '12:00',
        address: 'ул.Ямашева 12',
        rating: 4.5,
        is_urgent: true,
        status: 'open',
        created_at: '2025-18-06'
      },

      // другие вакансии
    ];

    // проверка статуса избранное для каждой вакансии

    this.vacancies.forEach(vacancy => {
      vacancy.isFavorite = this.favoritesService.isFavorite(vacancy.job_id);
    });
  }

  toggleFavorite(vacancy: Vacancy): void {
    vacancy.isFavorite = this.favoritesService.toggleFavorite(vacancy);
  }

  calculateDuration(timeStart: string, timeEnd: string): string {
    // Разбиваем строки времени на часы и минуты
    const [startHours, startMinutes] = timeStart.split(':').map(Number);
    const [endHours, endMinutes] = timeEnd.split(':').map(Number);
    
    // Создаём объекты Date для сравнения
    const startDate = new Date();
    startDate.setHours(startHours, startMinutes, 0);
    
    const endDate = new Date();
    endDate.setHours(endHours, endMinutes, 0);
    
    // Если конечное время меньше начального, считаем, что это следующий день
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }
    
    // Вычисляем разницу в миллисекундах
    const diffMs = endDate.getTime() - startDate.getTime();
    
    // Переводим в часы и минуты
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    // Форматируем результат
    if (diffHours > 0 && diffMinutes > 0) {
      return `${diffHours} ч. ${diffMinutes} мин.`;
    } else if (diffHours > 0) {
      return `${diffHours} ч.`;
    } else {
      return `${diffMinutes} мин.`;
    }
  }
}
