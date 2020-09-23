import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodSummaryComponent } from './mood-summary.component';

describe('MoodSummaryComponent', () => {
  let component: MoodSummaryComponent;
  let fixture: ComponentFixture<MoodSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
