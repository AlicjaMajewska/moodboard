import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewMoodComponent} from '../new-mood/new-mood.component';
import {MoodService} from "../mood.service";

@Component({
  selector: 'mb-insert-mood',
  templateUrl: './insert-mood.component.html',
  styleUrls: ['./insert-mood.component.sass']
})
export class InsertMoodComponent {

  constructor(public dialog: MatDialog, private moodService: MoodService) {
  }

  createNewMood() {
    const dialogRef = this.dialog.open(NewMoodComponent, {});

    dialogRef.afterClosed().subscribe(newMood => {
      if (newMood) {
        this.moodService.addNewMood(newMood);
      }
    });
  }
}
