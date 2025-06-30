import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth, User } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  

  constructor(private router: Router) {}

  async loginWithGoogle() {
    const auth = getAuth(); 
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    this.router.navigate(['/welcome']);
  }

  logout() {
    const auth = getAuth(); 
    signOut(auth).then(() => {
      this.router.navigate(['/']);
    });
  }

  getUser() {
    return getAuth().currentUser; 
  }
}
