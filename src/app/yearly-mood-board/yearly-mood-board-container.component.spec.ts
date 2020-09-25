import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyMoodBoardContainerComponent } from './yearly-mood-board-container.component';

describe('YearlyMoodBoardContainerComponent', () => {
  let component: YearlyMoodBoardContainerComponent;
  let fixture: ComponentFixture<YearlyMoodBoardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearlyMoodBoardContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyMoodBoardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
