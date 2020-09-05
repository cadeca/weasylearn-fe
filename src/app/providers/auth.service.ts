import {Injectable} from '@angular/core';
// import {Router} from '@angular/router';
// import * as firebase from 'firebase';

// const USER_PROFILE = 'userProfile';
@Injectable()
export class AuthService {
  //
  // private firebaseAuth;
  // constructor(public router: Router) {
  //   this.firebaseAuth = firebase.auth();
  //   this.firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  //   const userProfile = JSON.parse(localStorage.getItem(USER_PROFILE));
  //   if (userProfile && userProfile.stsTokenManager && userProfile.stsTokenManager.accessToken) {
  //     this.signInToken(userProfile.stsTokenManager.accessToken);
  //   }
  // }
  //
  // canActivate(): boolean {
  //   return !!this.currentUser();
  //
  // }
  //
  // signInToken(token) {
  //   this.firebaseAuth.signInWithCustomToken(token).then(r => {
  //     this.loginHandler();
  //   });
  // }
  //
  // currentUser() {
  //   return this.firebaseAuth.currentUser;
  // }
  //
  //
  // signInRegular(email: string, password: string) {
  //   this.firebaseAuth.signInWithEmailAndPassword(email, password).then(r => {
  //     this.loginHandler();
  //   });
  // }
  //
  // registerRegular(username: string, password: string) {
  //  return this.firebaseAuth.createUserWithEmailAndPassword(username, password);
  // }
  //
  // signOut() {
  //   this.firebaseAuth.signOut().then(r => {
  //     localStorage.removeItem(USER_PROFILE);
  //     this.router.navigate(['login']);
  //   });
  // }
  //
  // loginWithProvider(provider) {
  //   firebase.auth().signInWithPopup(provider).then((result) => {
  //     this.loginHandler();
  //   });
  // }
  //
  // loginWithGoogle() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   this.loginWithProvider(provider);
  // }
  //
  // loginWithFacebook() {
  //   const provider = new firebase.auth.FacebookAuthProvider();
  //   this.loginWithProvider(provider);
  // }
  //
  // private loginHandler() {
  //   localStorage.setItem(USER_PROFILE, JSON.stringify(this.currentUser()));
  //   this.router.navigate(['home']);
  // }
}
