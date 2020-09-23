import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NewMoodComponent } from '../new-mood/new-mood.component';

@Component({
  selector: 'mb-insert-mood',
  templateUrl: './insert-mood.component.html',
  styleUrls: ['./insert-mood.component.sass']
})
export class InsertMoodComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createNewMood() {
    const dialogRef = this.dialog.open(NewMoodComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
