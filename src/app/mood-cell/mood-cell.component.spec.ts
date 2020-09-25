import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodCellComponent } from './mood-cell.component';

describe('MoodCellComponent', () => {
  let component: MoodCellComponent;
  let fixture: ComponentFixture<MoodCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoodCellComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
