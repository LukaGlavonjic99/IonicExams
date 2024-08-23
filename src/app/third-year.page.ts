
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController,ToastController } from '@ionic/angular';
import { AddNewExamPage } from '../add-new-exam/add-new-exam.page';
import { UpdateExamPage } from '../update-exam/update-exam.page';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

type Exam = {
  name: string,
  date: Date,
  ESPB: number,
  id?: number;
  
}

@Component({
  selector: 'app-third-year',
  templateUrl: 'third-year.page.html',
  styleUrls: ['third-year.page.scss'],
})
export class ThirdYearPage implements OnInit, OnDestroy {
  today: number = Date.now();
  exams: Array<Exam> = [];
  filteredExams: Array<Exam> = [];
  searchTerm: string = '';
  sub: Subscription = new Subscription();

  


  constructor(public modalCtrl: ModalController,
              private dataService: DataService,
              private authService: AuthService,
              private router: Router,
              private toastController: ToastController,
            
             ) {
               
              }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getData(); 
  }

  async getData() {
    this.sub = this.dataService.getExams('examsThirdYear').subscribe((res) => {
      this.exams = res;
      this.filteredExams = res; 
      console.log(this.exams);
    });
  }

    async deleteExam(exam: Exam) {
      if (exam.id) {
        try {
          await this.dataService.deleteExam(exam.id,'examsThirdYear');
          this.getData();  
        } catch (error) {
          console.error('Error deleting exam:', error);
        }
      } else {
        console.error('Exam ID is missing');
      }
    }

    async goToAddPage() {
      const modal = await this.modalCtrl.create({
        component: AddNewExamPage,
        componentProps: { collectionName: 'examsThirdYear' }
      });
      return await modal.present();
    }

  async goToUpdatePage(exam: Exam) {
    const modal = await this.modalCtrl.create({
      component: UpdateExamPage,
      componentProps:{exam:exam} 
    });
    return await modal.present();
  }

   
  async logout() {
    await this.authService.logout();
  }

  searchExams(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredExams = this.exams.filter(exam => {
      return exam.name?.toLowerCase().includes(searchTerm);
    });
  }

  navigateTo(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }

  async markAsPassed(exam: Exam) {
    try {
      
      await this.dataService.addExam(exam, 'passedExams');
      this.getData(); 
      this.presentToast('Exam marked as passed!');
    } catch (error) {
      console.error('Error marking exam as passed:', error);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success' 
    });
    toast.present();
  }

  async updateExam(exam: Exam) {
    if (exam.id) {
      try {
        const updatedExam = await this.dataService.updateExam(exam);
        console.log('Exam updated successfully:', updatedExam);
        this.getData(); 
      } catch (error) {
        console.error('Error updating exam:', error);
      }
    } else {
      console.error('Exam ID is missing');
    }
  }

   
    async dismiss() {
      await this.modalCtrl.dismiss();
    }
}





