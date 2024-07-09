import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) {}

  async login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigateByUrl('/home');
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  async register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigateByUrl('/home');
    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  async logout() {
    await signOut(this.auth);
    this.router.navigateByUrl('/login');
  }
}
