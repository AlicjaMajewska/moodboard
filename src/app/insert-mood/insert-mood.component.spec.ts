import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMoodComponent } from './insert-mood.component';

describe('InsertMoodComponent', () => {
  let component: InsertMoodComponent;
  let fixture: ComponentFixture<InsertMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
