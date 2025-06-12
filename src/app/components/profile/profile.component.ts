import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userName: string = '';
  userRole: string = '';
  editableName: string = '';
  isEditing: boolean = false;

  constructor (
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.userName = this.userService.getUserName();
    this.userRole = this.userService.getUserRole();

    this.editableName = this.userName;
  }

  startEditing(): void {
    this.isEditing = true;

    this.editableName = this.userName; 
  }

  saveChanges () {
    if (this.editableName && this.editableName.trim().length >= 2) {
      this.userName = this.editableName.trim();

      this.userService.saveUserName(this.userName);

      this.isEditing = false;
    }
  }

  cancelEditing () {
    this.editableName = this.userName;

    this.isEditing = false;
  }

  getRoleName():string {
    if (this.userName === 'finder') {
      return 'Соискатель'
    }
    return 'Работодатель';
  }
}
