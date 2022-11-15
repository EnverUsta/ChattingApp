import { UserDto } from './../models/User/userDto.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegisterDto } from '../models/User/registerDto.interface';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter<boolean>();
  user: RegisterDto = {
    username: '',
    password: '',
  };

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  register(): void {
    this.accountService.register(this.user).subscribe({
      next: (response: UserDto) => {
        console.log(response);
        this.cancel();
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error);
      },
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}
