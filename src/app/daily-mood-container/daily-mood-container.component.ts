import {Component, OnInit} from '@angular/core';
import {MoodService} from "../mood.service";
import * as moment from 'moment'
import {Mood} from "../mood";

@Component({
  selector: 'mb-daily-mood-container',
  templateUrl: './daily-mood-container.component.html',
  styleUrls: ['./daily-mood-container.component.sass']
})
export class DailyMoodContainerComponent implements OnInit {
  date: Date;
  moodsOfDay: Mood[] = []

  constructor(private moodService: MoodService) {
  }

  ngOnInit(): void {
    this.date = moment().startOf('day').toDate();
    this.moodsOfDay = this.moodService.moods.filter(it => it.date.getTime() > this.date.getTime()); // TODO limit max
  }

}
