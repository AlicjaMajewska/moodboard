import { Injectable } from '@angular/core';
import { Mood } from './mood';
import { MoodTestingFactory } from './mood-testing-factory';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  moods: Mood[] = [];

  constructor() {
    this.moods = MoodTestingFactory.createMoods();
  }

  addNewMood(mood: Mood): void {
    this.moods = [...this.moods, mood];
  }

  getMoodsByDate(date: Date): Mood[] {
    const startDate = moment(date);
    const endDate = moment(date).add(1, 'day');

    return this.filterByRange(startDate, endDate);
  }

  private filterByRange(startDate: moment.Moment, endDate: moment.Moment): Mood[] {
    return this.moods.filter(it => moment(it.date).isBetween(startDate, endDate));
  }

  getMoodsByYear(date: Date): Mood[] {
    const startDate = moment(date);
    const endDate = moment(date).add(1, 'year');

    return this.filterByRange(startDate, endDate);
  }

  getMoodsByWeek(startOfWeek: Date): Mood[] {
    const startDate = moment(startOfWeek);
    const endDate = moment(startOfWeek).add(1, 'week');

    return this.filterByRange(startDate, endDate);
  }
}
