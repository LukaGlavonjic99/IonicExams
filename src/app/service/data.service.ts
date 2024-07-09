import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  collectionData,
  doc,
  deleteDoc,
  addDoc,
  updateDoc
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Exam {
  id?: number;
  name: string;
  date: Date;
  difficulty: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {}

  getExams(): Observable<Exam[]> {
    const examsRef = collection(this.firestore, 'exams');
    return collectionData(examsRef, { idField: 'id' }).pipe(
      map((docs) => docs.map(doc => {
        return {
          id: doc['id'],
          name: doc['name'],
          date: new Date(doc['date']),
          difficulty: doc['difficulty'],
        } as Exam;
      }))

    );
  }

  addExam(exam: Exam) {
    const examRef = collection(this.firestore, 'exams');
    return addDoc(examRef, {
      ...exam,
      date: exam.date.toISOString() 
    });;
  }

    async updateExam(exam: Exam) {
      try {
        const examRef = doc(this.firestore, `exams/${exam.id}`);
        console.log(examRef);
        const result = await updateDoc(examRef, {
          date: exam.date.toISOString(),
          name: exam.name,
          difficulty: exam.difficulty,
        });
        console.log('Exam updated successfully:', result);
        return result;
      } catch (error) {
        console.error('Error updating exam:', error);

        throw error;
      }
    }

  

   /* deleteExam(exam: Exam) {
    const examRef = doc(this.firestore, `exams/${exam.id}`);
    console.log('Deleting exam with ID:', exam.id); 
    return deleteDoc(examRef).then(() => {
      console.log('Exam deleted successfully:', exam.id); 
    }).catch(error => {
      console.error('Error deleting exam:', error); 
      throw error; 
    });
  }*/

    deleteExam(exam:Exam) {
      const examRef = doc(this.firestore, `tasks/${exam.id}`);
      return deleteDoc(examRef);
    }
 }
    


