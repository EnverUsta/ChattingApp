import { Component, OnInit } from '@angular/core';
import { UserDto } from './models/User/userDto.interface';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The Chatting App';
  users: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user = localStorage.getItem('user');
    const userObj: UserDto = user ? JSON.parse(user) : null;
    this.accountService.setCurrentUser(userObj);
  }
}
