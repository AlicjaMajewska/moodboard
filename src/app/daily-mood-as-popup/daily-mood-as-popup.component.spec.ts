import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMoodAsPopupComponent } from './daily-mood-as-popup.component';

describe('DailyMoodAsPopupComponent', () => {
  let component: DailyMoodAsPopupComponent;
  let fixture: ComponentFixture<DailyMoodAsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMoodAsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMoodAsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
