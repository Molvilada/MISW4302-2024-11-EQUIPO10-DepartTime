import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }

  login(): void {
    if (this.username === 'user1' && this.password === '12345') {
      this.router.navigate(['home']);
    } else {
      alert('Usuario o contraseña no coinciden');
    }
  }

  ngOnInit() {
  }

}
