import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  typeUser: string = '';

  ngOnInit() {
    this.typeUser = localStorage.getItem('userType') || '';
    console.log("Type d'utilisateur dans le header :", this.typeUser);
  }

}
