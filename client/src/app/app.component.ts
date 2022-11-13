import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: UserDto = JSON.parse(localStorage.getItem('user') || '{}');
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    this.http.get<any[]>('https://localhost:5001/api/users').subscribe({
      next: (response: any[]) => {
        if (response) this.users = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
