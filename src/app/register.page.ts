import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) { }

  async register() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.showErrorToast('Please fill out all fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showErrorToast('Passwords do not match.');
      return;
    }

    try {
      await this.authService.register(this.email, this.password);
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } catch (error) {
      this.showErrorToast('Registration failed. Please try again.');
    }
  }
  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 8000,
      color: 'danger',
      position: 'top'
    });
    toast.present();
  }


}
