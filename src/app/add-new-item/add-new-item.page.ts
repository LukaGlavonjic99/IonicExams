import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.page.html',
  styleUrls: ['./add-new-item.page.scss'],
})
export class AddNewItemPage implements OnInit {

  examName!: string
  examDifficulty!: string
  examDate: string = '2024-10-17T00:00:00';
  examId: number=1;


  constructor(public modalCtrl: ModalController, private dataservice: 
  DataService, private toastController: ToastController) { }

ngOnInit() {
}

async dismiss() {
await this.modalCtrl.dismiss();
}

async addExam() {
  try {
    await this.dataservice.addExam({
      name: this.examName,
      date: new Date(this.examDate),
      difficulty: this.examDifficulty,
      id: this.examId
    });

    this.presentToast('Exam added successfully!'); 

    this.dismiss();
  } catch (error) {
    console.error('Error adding exam:', error);
    this.presentToast('Error adding exam'); 
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
