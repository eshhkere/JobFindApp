import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterVacanciesComponent } from './filter-vacancies.component';

describe('FilterVacanciesComponent', () => {
  let component: FilterVacanciesComponent;
  let fixture: ComponentFixture<FilterVacanciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterVacanciesComponent]
    });
    fixture = TestBed.createComponent(FilterVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
