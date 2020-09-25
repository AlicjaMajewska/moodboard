import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMoodContainerComponent } from './daily-mood-container.component';

describe('DailyMoodContainerComponent', () => {
  let component: DailyMoodContainerComponent;
  let fixture: ComponentFixture<DailyMoodContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyMoodContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMoodContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
