import {Component, Input} from '@angular/core';
import {Mood} from "../mood";
import {groupBy} from "lodash";
import * as moment from 'moment'
import {KeyValue} from "@angular/common";

@Component({
  selector: 'mb-weekly-mood-board',
  templateUrl: './weekly-mood-board.component.html',
  styleUrls: ['./weekly-mood-board.component.sass']
})
export class WeeklyMoodBoardComponent {

  moodsByDates: { [date: string]: Mood[]; } = {};
  @Input() startOfWeek: Date;

  @Input()
  set moods(moodsOfWeek: Mood[]) {
    this.moodsByDates = groupBy(moodsOfWeek, mood => this.dateWithoutTime(mood.date));
    this.addMissingDaysAsEmptyArray();
  }

  dateAscOrder = (a: KeyValue<string, Mood[]>, b: KeyValue<string, Mood[]>): number => {
    return (new Date(a.key)).getTime() - (new Date(b.key)).getTime();
  }

  dateOf(dateAsString: string): Date {
    return new Date(dateAsString);
  }

  private addMissingDaysAsEmptyArray() {
    for (let i = 0; i < 7; i++) {
      let missingDate = moment(this.startOfWeek).add(i, 'days').toDate().toString();
      if (!this.moodsByDates.hasOwnProperty(missingDate)) {
        this.moodsByDates[missingDate] = [];
      }
    }
  }

  private dateWithoutTime(date: Date): Date {
    return moment(date).startOf('day').toDate();
  }
}
