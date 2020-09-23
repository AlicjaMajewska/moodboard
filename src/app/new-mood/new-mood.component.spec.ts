import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoodComponent } from './new-mood.component';

describe('NewMoodComponent', () => {
  let component: NewMoodComponent;
  let fixture: ComponentFixture<NewMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
