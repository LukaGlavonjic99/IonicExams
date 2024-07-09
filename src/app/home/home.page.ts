import { Component, OnInit, OnDestroy} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewItemPage } from '../add-new-item/add-new-item.page';
import { UpdateItemPage } from '../update-item/update-item.page';

import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';




type Exam={
  name?: string,
  date?: Date,
  difficulty?: string
  id?: number;
 
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy{
  today: number=Date.now();
  exams:Array<Exam>=[];
  sub: Subscription = new Subscription;

  constructor(public modalCtrl: ModalController,
    private dataService: DataService,
    ) 
    {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.getData(); 
  }


  async getData() {
    this.sub = this.dataService.getExams().subscribe((res) => {
      this.exams = res;
      console.log(this.exams);
    });
  }

  async deleteExam(exam:any){
    await this.dataService.deleteExam(exam);
  }

  async goToAddPage() {
    const modal = await this.modalCtrl.create({
      component: AddNewItemPage
    })
      return await modal.present();
    }
    async goToUpdatePage(exam: Exam) {
      const modal = await this.modalCtrl.create({
        component: UpdateItemPage,
        componentProps: exam
    })
    return await modal.present(); } 
  
    
  }
    


