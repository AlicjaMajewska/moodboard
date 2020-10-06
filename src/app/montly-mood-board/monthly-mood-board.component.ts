import { Component, Input } from '@angular/core';
import { Mood } from '../mood';
import * as moment from 'moment';
import { MoodService } from '../mood.service';
import { MatDialog } from '@angular/material/dialog';
import { DailyMoodAsPopupComponent } from '../daily-mood-as-popup/daily-mood-as-popup.component';

@Component({
  selector: 'mb-monthly-mood-board',
  templateUrl: './monthly-mood-board.component.html',
  styleUrls: ['./monthly-mood-board.component.sass']
})
export class MonthlyMoodBoardComponent {

  private firstDayInMonth: Date;
  @Input() moodsOfTheMonth: Mood[] = [];
  namesOfDaysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  daysInMonth: number[] = [];
  offsetCells: number[] = [];
  numberOfRowsInCalendar = 0;

  constructor(private moodService: MoodService, public dialog: MatDialog) {
  }

  @Input()
  set date(newDate: Date) {
    this.firstDayInMonth = newDate;
    const daysInMonth = moment(this.firstDayInMonth).daysInMonth();
    const offset = this.firstDayInMonth.getDay();
    this.offsetCells = Array(offset);
    this.numberOfRowsInCalendar = Math.ceil((offset + daysInMonth) / 7);
    this.daysInMonth = Array(daysInMonth);
  }

  generateGridClassesForSingleDay(index: number): string {
    const date = this.getDateOfIndex(index);
    const moodsOfADay = this.moodService.getMoodsByDate(date);
    if (moodsOfADay.length === 0) {
      return 'linear-gradient(to bottom, #dddddd, #f5f5f5)';
    }
    const colorsAsText = this.getColorsOf(moodsOfADay);
    return `linear-gradient(to bottom, ${colorsAsText})`;
  }

  private getDateOfIndex(index: number): Date {
    return moment(this.firstDayInMonth).add(index, 'day').toDate();
  }

  private getColorsOf(moodsOfADay: Mood[]): string {
    if (moodsOfADay.length === 0) {
      return '';
    }
    if (moodsOfADay.length === 1) {
      return moodsOfADay[0].category.toString() + ', ' + moodsOfADay[0].category.toString();
    }
    return moodsOfADay.map(it => it.category.toString()).reduce((a, b) => a + ', ' + b);
  }

  calculateNumberOfDay(index: number): number {
    return index + 1;
  }

  monthAndYearHeaderName(): string {
    return moment(this.firstDayInMonth).format('MMMM YYYY');
  }

  openDayInPopUp(index: number): void {
    const selectedDate = this.getDateOfIndex(index);
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

}
