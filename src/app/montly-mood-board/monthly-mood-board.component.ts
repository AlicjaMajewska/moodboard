import { Component, Input, OnInit } from '@angular/core';
import { Mood } from '../mood';
import * as moment from 'moment';

@Component({
  selector: 'mb-monthly-mood-board',
  templateUrl: './monthly-mood-board.component.html',
  styleUrls: ['./monthly-mood-board.component.sass']
})
export class MonthlyMoodBoardComponent implements OnInit {

  @Input() date: Date;
  @Input() moodsOfTheMonth: Mood[] = [];
  numberOfDaysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  numberOfDaysInMonth = Array(5 * 7); // TODO

  ngOnInit(): void {
  }

  generateGridClassesForSingleDay(index): string {
    // const date = this.getDateOutOfIndex(index);
    // const moodsOfADay = this.getMoodsOfADay(moment(date).dayOfYear());
    // const colorsAsText = this.getColorsOf(moodsOfADay);
    // return `linear-gradient(to bottom, ${colorsAsText})`;
    return 'linear-gradient(to bottom, #dddddd, #f5f5f5)';
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

}
