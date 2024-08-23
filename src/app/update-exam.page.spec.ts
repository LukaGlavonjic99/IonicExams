import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateExamPage } from './update-exam.page';

describe('UpdateExamPage', () => {
  let component: UpdateExamPage;
  let fixture: ComponentFixture<UpdateExamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
