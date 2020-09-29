import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyMoodBoardComponent } from './monthly-mood-board.component';

describe('MonthlyMoodBoardComponent', () => {
  let component: MonthlyMoodBoardComponent;
  let fixture: ComponentFixture<MonthlyMoodBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyMoodBoardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyMoodBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
