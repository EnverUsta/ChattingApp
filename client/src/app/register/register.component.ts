import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterDto } from '../models/User/registerDto.interface';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();
  user: RegisterDto = {
    username: '',
    password: '',
  };
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('Hello', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.matchValues('password'),
      ]),
    });
    this.registerForm.controls['password'].valueChanges.subscribe({
      next: () => {
        this.registerForm.controls['confirmPassword'].updateValueAndValidity();
      },
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    // null means no error
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === control.parent?.get(matchTo)?.value
        ? null
        : { notMatching: true };
    };
  }

  register(): void {
    console.log('registerForm value: ', this.registerForm?.value);
    // this.accountService.register(this.user).subscribe({
    //   next: (response: UserDto) => {
    //     this.cancel();
    //   },
    //   error: (error) => {
    //     this.toastr.error(error.error);
    //   },
    // });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}
