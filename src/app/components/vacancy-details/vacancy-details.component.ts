import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../../models/vacancy.model';
import { VacancyService } from '../../services/vacancy.service';
import { ViewHistoryService } from '../../services/view-history.service';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.scss']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy!: Vacancy;
  
  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
    private viewHistoryService: ViewHistoryService,
  ) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = +params['id'];
      const vacancyFromService = this.vacancyService.getVacancyById(id);
      
      if (vacancyFromService) {
        this.vacancy = vacancyFromService;

        // добавляем вакансию в историю просмотра
        this.viewHistoryService.addToHistory(this.vacancy);
      } else {
        // Если вакансия не найдена, можно перенаправить или показать сообщение
        console.error('Вакансия не найдена');
      }
    });
  }
  
  toggleFavorite(): void {
    this.vacancyService.toggleFavorite(this.vacancy.job_id);
  }
}