import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyMoodBoardInPixelsComponent } from './yearly-mood-board-in-pixels.component';

describe('YearlyMoodBoardInPixelsComponent', () => {
  let component: YearlyMoodBoardInPixelsComponent;
  let fixture: ComponentFixture<YearlyMoodBoardInPixelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyMoodBoardInPixelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyMoodBoardInPixelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
