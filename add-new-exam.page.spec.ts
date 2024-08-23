import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewExamPage } from './add-new-exam.page';

describe('AddNewExamPage', () => {
  let component: AddNewExamPage;
  let fixture: ComponentFixture<AddNewExamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
