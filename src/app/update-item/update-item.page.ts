import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  @Input() exam: any;
  examDate: string= '2024-10-17T00:00:00';
  examDifficulty: string = '';
  examName: string = '';
  
  number: number = 0;

  constructor(public modalCtrl: ModalController, private dataService:
    DataService, private toastController: ToastController) { }

  ngOnInit() {
    console.log(this.exam);
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async updateExam() {
    if (!this.exam.id) {
      console.error('Exam ID is undefined or null');
      return;
    }
    console.log('Updating exam:', this.exam);
    try {
      await this.dataService.updateExam(this.exam);
      console.log('Exam updated successfully');
      this.presentToast('Exam updated successfully!');
    } catch (error) {
      console.error('Error updating exam:', error);
    }
  }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom' ,
      color: 'success'
    });
    toast.present();
  }

}
