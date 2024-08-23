import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassedExamsPage } from './passed-exams.page';

describe('PassedExamsPage', () => {
  let component: PassedExamsPage;
  let fixture: ComponentFixture<PassedExamsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PassedExamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
