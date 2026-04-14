import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-sign-in',
  imports: [NgIf],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  currentView:'login'|'register'='login';
  switchView(){
     this.currentView = this.currentView === 'login' ? 'register' : 'login';
  }
}
