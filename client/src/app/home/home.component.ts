import { Component } from '@angular/core';
import { UserDto } from './../models/User/userDto.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  registerMode = false;

  constructor() {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  onCancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
