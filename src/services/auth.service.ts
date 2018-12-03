import { Injectable } from '@angular/core';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { firebaseConfig } from '../../keys/firebase';
import { NavController } from 'ionic-angular';

export enum AuthState {
    UNKNOWN,
    NOTLOGGEDIN,
    LOGGEDIN
}

@Injectable()
export class AuthService {

    public 
    public authState: AuthState;
    public currentUser: firebase.User = null;

    constructor(
        public facebook: Facebook
    ){
        this.authState = AuthState.UNKNOWN
        firebase.initializeApp(firebaseConfig);
    }

    detectAuthChangeAndRedirect(navCtrl: NavController, loginpage: any, profilepage: any){
        let self = this;
        console.log("Registering firebase auth state change callback")
        // Auth State Changed Callback
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("User logged in: "+JSON.stringify(user));
                self.currentUser = user;
                self.authState = AuthState.LOGGEDIN;
                navCtrl.setRoot(profilepage);
            } else {
                console.log("No user logged in");
                self.authState = AuthState.NOTLOGGEDIN;
                navCtrl.setRoot(loginpage);
            }
        });
        
    }

    loginWithFacebook(): Promise<any>{
        let self = this;
        console.log("Logging in with facebook");

        return this.facebook.login(['email'])
        .then( response => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
          firebase.auth().signInWithCredential(facebookCredential)
          .then( user => {
            console.log("Firebase success: "+JSON.stringify(user));
            // Auth State Change callback will handle rest!
          });
        })
        .catch((error)=>{
          console.error("Failed to login with facebook: "+error);
          self.authState = AuthState.NOTLOGGEDIN;
        });
    }

    logout(): Promise<any>{
        return firebase.auth().signOut();
    }
}