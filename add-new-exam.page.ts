import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-new-exam',
  templateUrl: './add-new-exam.page.html',
  styleUrls: ['./add-new-exam.page.scss'],
})
export class AddNewExamPage implements OnInit {
  @Input() collectionName?: string;

  examName!: string
  examDate: string = '2024-10-17T00:00:00';
  examId: number=1;
  examESPB: number=6


  constructor(public modalCtrl: ModalController, private dataservice: 
  DataService, private toastController: ToastController) { }

ngOnInit() {
}

async dismiss() {
await this.modalCtrl.dismiss();
}

async addExam() {
  if (!this.collectionName) {
    console.error('Collection name is missing');
    return;
  }

  const newExam = {
    name: this.examName,
    date: new Date(this.examDate),
    ESPB: this.examESPB
  };

  try {
    await this.dataservice.addExam(newExam, this.collectionName); 
    console.log('Exam added successfully!');
    this.presentToast('Exam added successfully!');
    this.dismiss(); 
  } catch (error) {
    console.error('Error adding exam:', error);
    this.presentToast('Error adding exam.');
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
