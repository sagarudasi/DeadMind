import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {

  public profilePicture: string = null;

  constructor(
    public navCtrl: NavController,
    public authService: AuthService
  ) {
    this.profilePicture = this.authService.currentUser.photoURL + "?height=500";
  }

  ngOnInit(){
    
  }

  logout(){
    this.authService.logout();
  }

}
