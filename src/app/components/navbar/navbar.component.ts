import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public isAuth: boolean = false;

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
  }

  isAuthenticated() {
    var token = localStorage.getItem('token');
    return token !== null;
  }

  logOut() {
    localStorage.removeItem('fullName');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

}
