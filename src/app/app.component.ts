import {Component, OnInit} from '@angular/core';
import {Mood, MoodCategory} from './mood';
import * as moment from 'moment'
import {Duration} from 'moment'

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  moods: Mood[] = [];

  ngOnInit(): void {
    this.moods.push(this.createMood(MoodCategory.OVER_THE_MOON, moment.duration("10:10:15")));
    this.moods.push(this.createMood(MoodCategory.HAPPY, moment.duration("06:06:15")));
    this.moods.push(this.createMood(MoodCategory.ANGRY, moment.duration("03:03:15")));
    this.moods.push(this.createMood(MoodCategory.SAD, moment.duration("01:01:15")));


    this.moods.push(this.createMood(MoodCategory.OVER_THE_MOON, moment.duration("24:10:15")));
    this.moods.push(this.createMood(MoodCategory.HAPPY, moment.duration("48:06:15")));
    this.moods.push(this.createMood(MoodCategory.SLEEPY, moment.duration("58:06:15")));
    this.moods.push(this.createMood(MoodCategory.ANGRY, moment.duration("74:03:15")));
    this.moods.push(this.createMood(MoodCategory.PRODUCTIVE, moment.duration("78:03:15")));
    this.moods.push(this.createMood(MoodCategory.SAD, moment.duration("92:01:15")));
    this.moods.push(this.createMood(MoodCategory.IN_LOVE, moment.duration("102:01:15")));
  }

  createMood(moodCategory: MoodCategory, timeDifference: Duration): Mood {
    const category = moodCategory;
    const date = moment().subtract(timeDifference).toDate();
    const summary = 'some generic summary that repeats itself '.repeat(Math.floor(Math.random() * Math.floor(1)));
    return Mood.withSummary(date, category, summary);
  }

  displayNewMood(mood: Mood): void {
    this.moods = [...this.moods, mood];
  }

  calculateStartOfWeek(): Date {
    return moment().startOf('week').toDate();
  }
}
