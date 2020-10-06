import { Component, Input } from '@angular/core';
import { Mood } from '../mood';
import * as moment from 'moment';
import { DailyMoodAsPopupComponent } from '../daily-mood-as-popup/daily-mood-as-popup.component';
import { MoodService } from '../mood.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mb-yearly-mood-board-in-pixels',
  templateUrl: './yearly-mood-board-in-pixels.component.html',
  styleUrls: ['./yearly-mood-board-in-pixels.component.sass']
})
export class YearlyMoodBoardInPixelsComponent {

  private readonly monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() moodsByYear: Mood[];
  date = new Date(); // TODO
  numberOfDaysInYear = Array(32 * 12);
  numberOfDaysInMonth = Array(31 + 1);
  numberOfMonthsInYear = Array(12 + 1);


  constructor(private moodService: MoodService, private dialog: MatDialog) {
  }

  isMonthNameCell(i): boolean {
    return i % 32 === 0;
  }

  getMonthName(i): string {
    return this.monthShortNames[i / 32];
  }

  getMoodsOfADay(dayOfYear: number): Mood[] {
    return this.moodsByYear.filter(it => moment(it.date).dayOfYear() === dayOfYear); // TODO do serwisu
  }

  openDayInPopUp(index: number): void {
    if (!this.dayHasSomeMoodInserted(index)) {
      return;
    }
    const selectedDate = this.getDateOutOfIndex(index);
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

  dayHasSomeMoodInserted(index: number): boolean {
    if (this.isMonthNameCell(index)) {
      return false;
    }
    const selectedDate = this.getDateOutOfIndex(index);
    return this.moodService.getMoodsByDate(selectedDate).length !== 0;
  }

  generateGridClassesForSingleDay(index: number): string {
    if (this.isMonthNameCell(index)) {
      return '';
    }
    const date = this.getDateOutOfIndex(index);
    if (!this.isDateValid(index)) {
      return 'linear-gradient(to bottom, #dddddd, #f5f5f5)';
    }
    const moodsOfADay = this.getMoodsOfADay(moment(date).dayOfYear());
    const colorsAsText = this.getColorsOf(moodsOfADay);
    return `linear-gradient(to bottom, ${colorsAsText})`;
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

  getDateOutOfIndex(index: number): Date {
    const month = Math.floor(index / 32);
    const day = Math.floor(index % 32);
    const newDate = new Date(this.date);
    newDate.setMonth(month);
    newDate.setDate(day);
    return newDate;
  }

  isDateValid(index: number): boolean {
    const month = Math.floor(index / 32);
    const day = Math.floor(index % 32);
    const year = this.date.getFullYear();
    return moment(`${year}-${month + 1}-${day}`, 'YYYY-M-D', true).isValid();
  }

}
