import { Component } from '@angular/core';
import { AppUser } from 'src/app/models/user.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  user: AppUser = {
    username: '',
    password: '',
  };

  constructor() {}

  login() {
    console.log('user: ', this.user);
  }
}
