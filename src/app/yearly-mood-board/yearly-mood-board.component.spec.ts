import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyMoodBoardComponent } from './yearly-mood-board.component';

describe('YearlyMoodBoardComponent', () => {
  let component: YearlyMoodBoardComponent;
  let fixture: ComponentFixture<YearlyMoodBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearlyMoodBoardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyMoodBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
