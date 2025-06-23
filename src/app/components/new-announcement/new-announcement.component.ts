import { Component } from '@angular/core';

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.scss']
})
export class NewAnnouncementComponent {
  isUrgent: boolean = false;
  
  toggleUrgent(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.isUrgent = checkbox.checked;
    console.log('isUrgent:', this.isUrgent);
  }
}
