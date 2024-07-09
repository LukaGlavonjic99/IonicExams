import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async login() {
    if (!this.email || !this.password) {
      this.showErrorToast('Please enter both email and password.');
      return;
    }

    try {
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } catch (error) {
      this.showErrorToast('Invalid email or password. Please try again.');
    }
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }
}
