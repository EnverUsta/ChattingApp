import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '../models/User/userDto.interface';
import { AccountService } from '../services/account.service';
import { LoginDto } from './../models/User/loginDto.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  currentUser$: Observable<UserDto | null> = this.accoutService.currentUser$;
  user: LoginDto = {
    username: '',
    password: '',
  };

  constructor(private accoutService: AccountService) {}

  login() {
    this.accoutService.login(this.user).subscribe({
      next: (user: UserDto) => {
        console.log('response: ', user);
      },
      error: (error) => {
        console.log('error: ', error);
      },
    });
  }

  logout() {
    this.accoutService.logout();
  }
}
