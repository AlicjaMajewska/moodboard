import { Component, OnInit } from '@angular/core';
import { Mood } from '../mood';
import { groupBy } from 'lodash';
import * as moment from 'moment';
import { KeyValue } from '@angular/common';
import { MoodService } from '../mood.service';
import { DailyMoodAsPopupComponent } from '../daily-mood-as-popup/daily-mood-as-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mb-weekly-mood-board',
  templateUrl: './weekly-mood-board.component.html',
  styleUrls: ['./weekly-mood-board.component.sass']
})
export class WeeklyMoodBoardComponent implements OnInit {

  moodsByDates: { [date: string]: Mood[]; } = {};
  startOfWeek: Date;

  constructor(private moodService: MoodService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.startOfWeek = moment().startOf('week').toDate(); // TODO korzystanie z daty jako input
    const moodsOfWeek = this.moodService.getMoodsByWeek(this.startOfWeek);
    this.moodsByDates = groupBy(moodsOfWeek, mood => this.dateWithoutTime(mood.date));
    this.addMissingDaysAsEmptyArray();
  }

  dateAscOrder = (a: KeyValue<string, Mood[]>, b: KeyValue<string, Mood[]>): number => {
    return (new Date(a.key)).getTime() - (new Date(b.key)).getTime();
  }

  dateOf(dateAsString: string): Date {
    return new Date(dateAsString);
  }

  dayHasSomeMoodInserted(selectedDay: string): boolean {
    const selectedDate = new Date(selectedDay);
    const moodsByDate = this.moodService.getMoodsByDate(selectedDate);
    return moodsByDate.length !== 0;
  }

  openDayInPopUp(selectedDay: string): void {
    if (!this.dayHasSomeMoodInserted(selectedDay)) {
      return;
    }
    const selectedDate = new Date(selectedDay);
    this.dialog.open(DailyMoodAsPopupComponent,
      {
        height: '90vh',
        width: '70vw',
        data: {
          date: selectedDate,
          moodsOfDay: this.moodService.getMoodsByDate(selectedDate)
        }
      },
    );
  }

  private addMissingDaysAsEmptyArray(): void {
    for (let i = 0; i < 7; i++) {
      const missingDate = moment(this.startOfWeek).add(i, 'days').toDate().toString();
      if (!this.moodsByDates.hasOwnProperty(missingDate)) {
        this.moodsByDates[missingDate] = [];
      }
    }
  }

  private dateWithoutTime(date: Date): Date {
    return moment(date).startOf('day').toDate();
  }
}
