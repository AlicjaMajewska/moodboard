import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMoodBoardComponent } from './daily-mood-board.component';

describe('DailyMoodBoardComponent', () => {
  let component: DailyMoodBoardComponent;
  let fixture: ComponentFixture<DailyMoodBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyMoodBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMoodBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
