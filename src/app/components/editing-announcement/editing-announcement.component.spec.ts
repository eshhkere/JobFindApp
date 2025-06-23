import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingAnnouncementComponent } from './editing-announcement.component';

describe('EditingAnnouncementComponent', () => {
  let component: EditingAnnouncementComponent;
  let fixture: ComponentFixture<EditingAnnouncementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditingAnnouncementComponent]
    });
    fixture = TestBed.createComponent(EditingAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
