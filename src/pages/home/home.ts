import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthState, AuthService } from '../../services/auth.service';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public AuthStateEnum = AuthState;

  constructor(
    public navCtrl: NavController,
    public authService: AuthService
  ) {

  }

  ngOnInit(){
    this.authService.detectAuthChangeAndRedirect(this.navCtrl, HomePage , ProfilePage);
  }

  loginWithFacebook(){
    // Setting state to UNKNOWN
    this.authService.authState = AuthState.UNKNOWN;
    this.authService.loginWithFacebook();
  }

}

