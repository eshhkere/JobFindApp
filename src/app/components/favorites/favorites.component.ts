import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models/vacancy.model';
import { VacancyService } from '../../services/vacancy.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteVacancies: Vacancy[] = [];
  
  constructor(
    private vacancyService: VacancyService,
    private favoritesService: FavoritesService
  ) { }
  
  ngOnInit(): void {
    // Получаем все вакансии и фильтруем только избранные
    this.favoriteVacancies = this.vacancyService.getAllVacancies()
      .filter(vacancy => vacancy.isFavorite);
  }
  
  toggleFavorite(vacancy: Vacancy): void {
    this.vacancyService.toggleFavorite(vacancy.job_id);
    // Обновляем список после удаления из избранного
    this.favoriteVacancies = this.vacancyService.getAllVacancies()
      .filter(v => v.isFavorite);
  }
}