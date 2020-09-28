import { Component, Input, OnInit } from '@angular/core';
import { Mood } from '../mood';
import * as moment from 'moment';

@Component({
  selector: 'mb-yearly-mood-board-in-pixels',
  templateUrl: './yearly-mood-board-in-pixels.component.html',
  styleUrls: ['./yearly-mood-board-in-pixels.component.sass']
})
export class YearlyMoodBoardInPixelsComponent implements OnInit {
  private readonly monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() moodsByYear: Mood[];
  date = new Date(); // TODO
  numberOfDaysInYear = Array(32 * 12);
  numberOfDaysInMonth = Array(31 + 1);
  numberOfMonthsInYear = Array(12 + 1);

  ngOnInit(): void {
  }

  isMonthNameCell(i): boolean {
    return i % 32 === 0;
  }

  getMonthName(i): string {
    return this.monthShortNames[i / 32];
  }

  getMoodsOfADay(dayOfYear: number): Mood[] {
    return this.moodsByYear.filter(it => moment(it.date).dayOfYear() === dayOfYear);
  }

  generateGridClassesForSingleDay(index): string {
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
