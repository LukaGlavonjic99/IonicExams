import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.page.html',
  styleUrls: ['./update-exam.page.scss'],
})
export class UpdateExamPage implements OnInit {

  @Input() exam: any;
  @Input() collectionName!: string;

  examDate: string= '2024-10-17T00:00:00';
  examESPB: number = 6;
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
   
    this.exam.name = this.examName;
    this.exam.ESPB = this.examESPB;
    this.exam.date = new Date(this.examDate);
    try {
      await this.dataService.updateExam(this.exam);
      console.log('Exam updated successfully');
      this.presentToast('Exam updated successfully!');
      await this.dismiss();
    } catch (error) {
      console.error('Error updating exam:', error);
    }
  }

  
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 8000, 
      position: 'bottom' ,
      color: 'success'
    });
    toast.present();
  }

}
