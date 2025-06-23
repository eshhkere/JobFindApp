import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../../models/vacancy.model';
import { VacancyService } from '../../services/vacancy.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  
  constructor(
    private vacancyService: VacancyService,
    private userService: UserService
  ) { }
  
  ngOnInit(): void {
    // Получаем вакансии из сервиса
    this.vacancies = this.vacancyService.getAllVacancies();
  }
  
  toggleFavorite(vacancy: Vacancy): void {
    // Используем сервис для переключения
    this.vacancyService.toggleFavorite(vacancy.job_id);
  }

  isEmployer(): boolean {
    return this.userService.getUserRole() === 'employer';
  }

}