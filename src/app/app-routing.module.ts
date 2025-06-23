import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { VacancyDetailsComponent } from './components/vacancy-details/vacancy-details.component';
import { FilterVacanciesComponent } from './components/filter-vacancies/filter-vacancies.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { NewAnnouncementComponent } from './components/new-announcement/new-announcement.component';

const routes: Routes = [
  {path: '', redirectTo: '/authorization', pathMatch: 'full' },
  {path: 'authorization', component: AuthorizationComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: 'vacancy-details', component: VacancyDetailsComponent},
  {path: 'filter-vacancies', component: FilterVacanciesComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'view-history', component: ViewHistoryComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'new-announcement', component: NewAnnouncementComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
