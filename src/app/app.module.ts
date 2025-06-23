import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { FinderNavigationComponent } from './components/navigation/finder-navigation/finder-navigation.component';
import { EmployerNavigationComponent } from './components/navigation/employer-navigation/employer-navigation.component';
import { VacancyDetailsComponent } from './components/vacancy-details/vacancy-details.component';
import { FilterVacanciesComponent } from './components/filter-vacancies/filter-vacancies.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DurationPipe } from './pipes/duration.pipe';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { NewAnnouncementComponent } from './components/new-announcement/new-announcement.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    ProfileComponent,
    VacanciesComponent,
    FinderNavigationComponent,
    EmployerNavigationComponent,
    VacancyDetailsComponent,
    FilterVacanciesComponent,
    FavoritesComponent,
    DurationPipe,
    ViewHistoryComponent,
    AnnouncementsComponent,
    NewAnnouncementComponent,
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
