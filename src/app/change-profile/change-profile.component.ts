import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss'],
})
export class ChangeProfileComponent {
  username: string = '';
  email: string = '';
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;

  constructor(private router: Router) {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }

  changeProfile() {
    this.router.navigate(['home']);
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
