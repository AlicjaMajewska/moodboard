import {Component, OnInit} from '@angular/core';
import {Mood, MoodCategory} from './mood';
import * as moment from 'moment'
import {Duration} from "moment";

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  moods: Mood[] = [];

  ngOnInit(): void {
    this.moods.push(this.createMood(MoodCategory.OVER_THE_MOON, moment.duration("10:010:15")));
    this.moods.push(this.createMood(MoodCategory.HAPPY, moment.duration("06:06:15")));
    this.moods.push(this.createMood(MoodCategory.ANGRY, moment.duration("03:03:15")));
    this.moods.push(this.createMood(MoodCategory.SAD, moment.duration("01:01:15")));
  }

  createMood(moodCategory: MoodCategory, timeDifference: Duration): Mood {
    const category = moodCategory;
    const date = moment().subtract(timeDifference).toDate();
    const summary = 'some generic summary that repeats itself '.repeat(Math.floor(Math.random() * Math.floor(8)));
    return Mood.withSummary(date, category, summary);
  }

  displayNewMood(mood: Mood) {
    this.moods = [...this.moods, mood];
  }
}
