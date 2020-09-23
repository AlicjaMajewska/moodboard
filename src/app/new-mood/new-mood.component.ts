import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'mb-new-mood',
  templateUrl: './new-mood.component.html',
  styleUrls: ['./new-mood.component.sass']
})
export class NewMoodComponent implements OnInit {

  private moodForm;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private matDialogRef: MatDialogRef<NewMoodComponent>,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.moodForm = this.formBuilder.group({
      date: [null],
      category: ['', Validators.required],
      summary: ['']
    });
  }

  save() {
    this.moodForm.patch({
      date: Date.now()
    })
    const mood = this.moodForm.getValue();
    this.matDialogRef.close(mood);
  }

  cancell() {
    this.matDialogRef.close();
  }

}
