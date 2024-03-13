import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss']
})
export class ChangeProfileComponent implements OnInit {
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

  ngOnInit() {
  }

  changeProfile() {
    console.log('Change Profile');
    console.log('Username: ' + this.username);
    console.log('Email: ' + this.email);
    console.log('Current Password: ' + this.currentPassword);
    console.log('New Password: ' + this.newPassword);
    console.log('Confirm New Password: ' + this.confirmNewPassword);
    this.router.navigate(['home']);
  }

  cancel() {
    console.log('Cancel');
    this.router.navigate(['home']);
  }

}
