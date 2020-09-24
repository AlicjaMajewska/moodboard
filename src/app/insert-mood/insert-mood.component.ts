import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewMoodComponent} from '../new-mood/new-mood.component';
import {Mood} from "../mood";

@Component({
  selector: 'mb-insert-mood',
  templateUrl: './insert-mood.component.html',
  styleUrls: ['./insert-mood.component.sass']
})
export class InsertMoodComponent implements OnInit {

  @Output() onMoodAdded = new EventEmitter<Mood>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  createNewMood() {
    const dialogRef = this.dialog.open(NewMoodComponent, {
    });

    dialogRef.afterClosed().subscribe(newMood => {
      if (newMood) {
        this.onMoodAdded.emit(newMood);
      }
    });
  }
}
