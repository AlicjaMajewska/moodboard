import {Component, OnInit} from '@angular/core';
import {Mood} from "../mood";
import {groupBy} from "lodash";
import * as moment from 'moment'
import {KeyValue} from "@angular/common";
import {MoodService} from "../mood.service";
import {Router} from "@angular/router";

@Component({
  selector: 'mb-weekly-mood-board',
  templateUrl: './weekly-mood-board.component.html',
  styleUrls: ['./weekly-mood-board.component.sass']
})
export class WeeklyMoodBoardComponent implements OnInit {

  moodsByDates: { [date: string]: Mood[]; } = {};
  startOfWeek: Date;

  constructor(private moodService: MoodService, private router: Router) {
  }

  ngOnInit(): void {
    this.startOfWeek = moment().startOf('week').toDate();
    const moodsOfWeek = this.moodService.moods; // TODO korzystanie z daty // TODO observable
    this.moodsByDates = groupBy(moodsOfWeek, mood => this.dateWithoutTime(mood.date));
    this.addMissingDaysAsEmptyArray();
  }

  dateAscOrder = (a: KeyValue<string, Mood[]>, b: KeyValue<string, Mood[]>): number => {
    return (new Date(a.key)).getTime() - (new Date(b.key)).getTime();
  }

  dateOf(dateAsString: string): Date {
    return new Date(dateAsString);
  }

  navigateToDailyMoodBoard(selectedDay: string): void {
    this.router.navigate(['daily-board', moment(selectedDay).format('MM-DD-YYYY')]);
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
