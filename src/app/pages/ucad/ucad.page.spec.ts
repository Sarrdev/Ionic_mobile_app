import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UcadPage } from './ucad.page';

describe('UcadPage', () => {
  let component: UcadPage;
  let fixture: ComponentFixture<UcadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UcadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
