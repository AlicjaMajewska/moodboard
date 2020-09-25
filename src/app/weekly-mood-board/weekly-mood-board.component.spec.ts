import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMoodBoardComponent } from './weekly-mood-board.component';

describe('WeeklyMoodBoardComponent', () => {
  let component: WeeklyMoodBoardComponent;
  let fixture: ComponentFixture<WeeklyMoodBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyMoodBoardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyMoodBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
