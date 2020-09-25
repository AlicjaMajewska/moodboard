import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodIconComponent } from './mood-icon.component';

describe('MoodIconComponent', () => {
  let component: MoodIconComponent;
  let fixture: ComponentFixture<MoodIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodIconComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
