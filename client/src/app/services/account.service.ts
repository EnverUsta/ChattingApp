import { UserDto } from './../models/User/userDto.interface';
import { LoginDto } from './../models/User/loginDto.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) {}

  login(user: LoginDto) {
    return this.http.post<UserDto>(this.baseUrl + 'account/login', user);
  }
}
