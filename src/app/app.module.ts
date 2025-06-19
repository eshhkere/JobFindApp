import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VacancyDetailsComponent } from './components/vacancy-details/vacancy-details.component';
import { FilterVacanciesComponent } from './components/filter-vacancies/filter-vacancies.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    ProfileComponent,
    VacanciesComponent,
    NavigationComponent,
    VacancyDetailsComponent,
    FilterVacanciesComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
