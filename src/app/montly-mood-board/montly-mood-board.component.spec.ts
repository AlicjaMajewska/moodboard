import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontlyMoodBoardComponent } from './montly-mood-board.component';

describe('MontlyMoodBoardComponent', () => {
  let component: MontlyMoodBoardComponent;
  let fixture: ComponentFixture<MontlyMoodBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontlyMoodBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontlyMoodBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
