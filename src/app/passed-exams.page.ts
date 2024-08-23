
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewExamPage } from '../add-new-exam/add-new-exam.page';
import { UpdateExamPage } from '../update-exam/update-exam.page';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

type Exam = {
  name?: string,
  date?: Date,
  ESPB?: number,
  id?: number;
  
}

@Component({
  selector: 'app-passed-exams',
  templateUrl: 'passed-exams.page.html',
  styleUrls: ['passed-exams.page.scss'],
})
export class PassedExamsPage implements OnInit, OnDestroy {
  today: number = Date.now();
  exams: Array<Exam> = [];
  filteredExams: Array<Exam> = [];
  searchTerm: string = '';
  sub: Subscription = new Subscription();

  constructor(public modalCtrl: ModalController,
              private dataService: DataService,
              private authService: AuthService,
              private router: Router) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.getData(); 
  }

  async getData() {
    this.sub = this.dataService.getExams('passedExams').subscribe((res) => { 
      this.exams = res;
      this.filteredExams = res; 
      console.log(this.exams);
    });
  }

      async deleteExam(exam: Exam) {
        if (exam.id) {
          try {
            await this.dataService.deleteExam(exam.id, 'passedExams'); 
            this.getData(); 
          } catch (error) {
            console.error('Error deleting exam:', error);
          }
        } else {
          console.error('Exam ID is missing');
        }
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
}





