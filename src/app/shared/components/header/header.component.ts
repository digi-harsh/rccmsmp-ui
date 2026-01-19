import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appTitle = 'Revenue Court Case Management System (RCCMS)';
  stateTitle = 'Government of Manipur';
  logo = "../../../../assets/emblem-in-white.png"
  userData: any;
  isLoggedIn: boolean = false;
  newCode$ = this.authService.data$;

  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    if (this.isLoggedIn) {
      this.authService.sendData(true);
    }
    this.userData = this.authService.getUserData();
  }

  goBack() {
    this.location.back();
  }

  goHome() {
    this.router.navigate(['/citizen/home']);
  }

  goToProfile() {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}

