import { Component, Input } from '@angular/core';
import { login, register } from '../../model/types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  signType: 'Login' | 'Sign Up' = 'Login';

  loginData: login = {
    email: '',
    password: '',
  };

  registerData: register = {
    email: '',
    password: '',
    phoneNumber: '',
    name: '',
  };

  ToggleLogin() {
    if (this.signType === 'Login') {
      this.signType = 'Sign Up';
    } else {
      this.signType = 'Login';
    }
  }
  OnSubmit() {
    if (this.signType === 'Login') {
      console.log(this.loginData);
      this.loginData = {
        email: '',
        password: '',
      };
    } else {
      console.log(this.registerData);
      this.registerData = {
        email: '',
        password: '',
        phoneNumber: '',
        name: '',
      };
    }
  }
}
