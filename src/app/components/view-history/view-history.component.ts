import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vacancy } from '../../models/vacancy.model';
import { ViewHistoryService } from '../../services/view-history.service';
import { VacancyService } from '../../services/vacancy.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit, OnDestroy {
  viewedVacancies: Vacancy[] = [];
  private subscription = new Subscription();

  constructor(
    private viewHistoryService: ViewHistoryService,
    private vacancyService: VacancyService,
    private favoritesService: FavoritesService
  ) { }
  
  ngOnInit(): void {
    this.loadHistory();
    
    // Подписываемся на изменения в избранном
    this.subscription = this.favoritesService.favoritesChanged$.subscribe(change => {
      // Обновляем статус избранного в истории просмотров
      const vacancy = this.viewedVacancies.find(v => v.job_id === change.id);
      if (vacancy) {
        vacancy.isFavorite = change.isFavorite;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  loadHistory(): void {
    this.viewedVacancies = this.viewHistoryService.getViewedVacancies();
    
    // Проверяем статус избранного для каждой вакансии
    this.viewedVacancies.forEach(vacancy => {
      vacancy.isFavorite = this.favoritesService.isFavorite(vacancy.job_id);
    });
  }
  
  toggleFavorite(vacancy: Vacancy): void {
    this.vacancyService.toggleFavorite(vacancy.job_id);
  }
}