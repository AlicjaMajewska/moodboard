import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyMoodBoardContainerComponent } from './monthly-mood-board-container.component';

describe('MonthlyMoodBoardContainerComponent', () => {
  let component: MonthlyMoodBoardContainerComponent;
  let fixture: ComponentFixture<MonthlyMoodBoardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyMoodBoardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyMoodBoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
