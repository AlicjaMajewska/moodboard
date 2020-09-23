import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from "@angular/forms";
import {MoodCategory} from "../mood";

@Component({
  selector: 'mb-new-mood',
  templateUrl: './new-mood.component.html',
  styleUrls: ['./new-mood.component.sass']
})
export class NewMoodComponent implements OnInit {

  moodForm;
  moodCategories: MoodCategory[] = MoodCategory.values();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<NewMoodComponent>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.moodForm = this.formBuilder.group({
      date: [null],
      category: [MoodCategory.HAPPY, Validators.required],
      summary: ['']
    });
  }

  save() {
    this.moodForm.patchValue({
      date: Date.now()
    });
    const mood = this.moodForm.value;
    this.matDialogRef.close(mood);
  }

  nameOfMood(moodCategory: MoodCategory): string {
    return MoodCategory.moodName(moodCategory);
  }

  pathToMoodIcon(moodCategory: MoodCategory): string {
    return '/assets/icons/emoji_gif_100px/' + MoodCategory.filename(moodCategory);
  }

  selectMood(moodCategory: MoodCategory): void {
    this.moodForm.patchValue({
      category: moodCategory
    });
  }

  isMoodSelected(moodCategory: MoodCategory): boolean {
    return this.moodForm.value.category === moodCategory.toString();
  }
}
