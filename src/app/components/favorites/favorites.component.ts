import { Component, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancy';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteVacancies: Vacancy[] = [];

  constructor(private favoritesService: FavoritesService) {}
    ngOnInit(): void {
      this.favoriteVacancies = this.favoritesService.getFavorites();
    }

    removeFavorite(jobId: number): void {
      this.favoritesService.removeFromFavorites(jobId);
      this.favoriteVacancies = this.favoritesService.getFavorites();
    }
}
