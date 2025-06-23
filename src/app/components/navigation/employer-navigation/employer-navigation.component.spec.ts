import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerNavigationComponent } from './employer-navigation.component';

describe('EmployerNavigationComponent', () => {
  let component: EmployerNavigationComponent;
  let fixture: ComponentFixture<EmployerNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerNavigationComponent]
    });
    fixture = TestBed.createComponent(EmployerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
