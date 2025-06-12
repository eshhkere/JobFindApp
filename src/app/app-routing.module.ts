import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';

const routes: Routes = [
  {path: '', redirectTo: '/authorization', pathMatch: 'full' },
  {path: 'authorization', component: AuthorizationComponent },
  {path: 'profile', component: ProfileComponent},
  {path: 'vacancies', component: VacanciesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
