import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mood } from '../mood';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'mb-daily-mood-as-popup',
  templateUrl: './daily-mood-as-popup.component.html',
  styleUrls: ['./daily-mood-as-popup.component.sass']
})
export class DailyMoodAsPopupComponent {
  date: Date;
  moodsOfDay: Mood[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    if (data) {
      this.date = data.date;
      this.moodsOfDay = data.moodsOfDay;
    }
  }

  navigateToSelectedDate(): void {
    this.router.navigate(['daily-board', moment(this.date).format('MM-DD-YYYY')]);
  }
}
