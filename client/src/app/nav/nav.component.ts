import { LoginDto } from './../models/User/loginDto.interface';
import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { UserDto } from '../models/User/userDto.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  loggedIn: boolean = false;
  user: LoginDto = {
    username: '',
    password: '',
  };

  constructor(private accoutService: AccountService) {}

  login() {
    this.accoutService.login(this.user).subscribe({
      next: (user: UserDto) => {
        console.log('response: ', user);
        this.loggedIn = true;
      },
      error: (error) => {
        console.log('error: ', error);
      },
    });
  }

  logout() {
    this.loggedIn = false;
  }
}
