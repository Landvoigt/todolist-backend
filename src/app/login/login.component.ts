import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  async login() {
    try {
      let resp: any = await this.authService.loginWithUsernameAndPw(this.username, this.password);
      localStorage.setItem('token', resp['token']);
      this.router.navigateByUrl('/todos');
    } catch (e) {
      console.log(e);
    }
  }
}