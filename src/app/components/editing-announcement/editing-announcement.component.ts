import { Component } from '@angular/core';

@Component({
  selector: 'app-editing-announcement',
  templateUrl: './editing-announcement.component.html',
  styleUrls: ['./editing-announcement.component.scss']
})
export class EditingAnnouncementComponent {
  isUrgent: boolean = false;
  
  toggleUrgent(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isUrgent = checkbox.checked;
    console.log('isUrgent:', this.isUrgent); // Для отладки
  }
}
