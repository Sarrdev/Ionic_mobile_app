import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UgbPage } from './ugb.page';

describe('UgbPage', () => {
  let component: UgbPage;
  let fixture: ComponentFixture<UgbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UgbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
