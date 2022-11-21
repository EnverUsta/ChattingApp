import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RegisterDto } from '../models/User/registerDto.interface';
import { LoginDto } from './../models/User/loginDto.interface';
import { UserDto } from './../models/User/userDto.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<UserDto | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(user: LoginDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.baseUrl + 'account/login', user).pipe(
      map((user: UserDto) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
  }

  register(user: RegisterDto): Observable<UserDto> {
    return this.http
      .post<UserDto>(this.baseUrl + 'account/register', user)
      .pipe(
        map((user: UserDto) => {
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
          return user;
        })
      );
  }

  setCurrentUser(user: UserDto): void {
    this.currentUserSource.next(user);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
