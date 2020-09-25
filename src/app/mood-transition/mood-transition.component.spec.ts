import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTransitionComponent } from './mood-transition.component';

describe('MoodTransitionComponent', () => {
  let component: MoodTransitionComponent;
  let fixture: ComponentFixture<MoodTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodTransitionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
