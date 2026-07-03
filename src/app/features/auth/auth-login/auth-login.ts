import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../../core/services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-login',
  imports: [
    FormsModule
  ],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.scss',
})
export class AuthLogin {
  protected username: string;
  protected password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.username = "";
    this.password = "";
  }

  protected checkLogin() {
    return null
  }

  protected checkPassword() {
    return null
  }

  protected login() {
    if (!this.checkLogin() && !this.checkPassword()) {
      this.authService.login(this.username)
      if (this.authService.isLogged()) {
        this.router.navigate(['/encounter'])
      }
    }
  }
}
