import {Mood, MoodCategory} from "./mood";
import * as moment from "moment";
import {Duration} from "moment";

export class MoodTestingFactory {

  static createMoods(): Mood[] {
    const moods: Mood[] = [];
    moods.push(this.createMood(MoodCategory.OVER_THE_MOON, moment.duration("10:10:15")));
    moods.push(this.createMood(MoodCategory.HAPPY, moment.duration("06:06:15")));
    moods.push(this.createMood(MoodCategory.ANGRY, moment.duration("03:03:15")));
    moods.push(this.createMood(MoodCategory.SAD, moment.duration("01:01:15")));

    moods.push(this.createMood(MoodCategory.OVER_THE_MOON, moment.duration("24:10:15")));
    moods.push(this.createMood(MoodCategory.HAPPY, moment.duration("48:06:15")));
    moods.push(this.createMood(MoodCategory.SLEEPY, moment.duration("58:06:15")));
    moods.push(this.createMood(MoodCategory.ANGRY, moment.duration("74:03:15")));
    moods.push(this.createMood(MoodCategory.PRODUCTIVE, moment.duration("78:03:15")));
    moods.push(this.createMood(MoodCategory.SAD, moment.duration("92:01:15")));
    moods.push(this.createMood(MoodCategory.IN_LOVE, moment.duration("102:01:15")));
    moods.push(this.createMood(MoodCategory.SLEEPY, moment.duration("133:01:15")));
    moods.push(this.createMood(MoodCategory.PRODUCTIVE, moment.duration("138:01:15")));

    return moods;
  }

  static createMood(moodCategory: MoodCategory, timeDifference: Duration): Mood {
    const category = moodCategory;
    const date = moment().subtract(timeDifference).toDate();
    const summary = 'some generic summary that repeats itself '.repeat(Math.floor(Math.random() * Math.floor(5)));
    return Mood.withSummary(date, category, summary);
  }

}
