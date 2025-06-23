import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderNavigationComponent } from './finder-navigation.component';

describe('FinderNavigationComponent', () => {
  let component: FinderNavigationComponent;
  let fixture: ComponentFixture<FinderNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinderNavigationComponent]
    });
    fixture = TestBed.createComponent(FinderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
