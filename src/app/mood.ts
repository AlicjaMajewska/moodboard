export class Mood {
  date: Date;
  category: MoodCategory;
  summary?: string;

  constructor(date: Date, category: MoodCategory, summary?: string) {
    this.date = date;
    this.category = category;
    this.summary = summary;
  }

  static withSummary(date: Date, category: MoodCategory, summary?: string): Mood {
    return new Mood(date, category, summary);
  }

  static of(date: Date, category: MoodCategory): Mood {
    return new Mood(date, category, undefined);
  }
}

export class MoodTransition {
  initial: Mood;
  finishing: Mood;
  durationInSeconds: number;

  constructor(initial: Mood, finishing: Mood) {
    this.initial = initial;
    this.finishing = finishing;
    this.durationInSeconds = finishing.date.getTime() - initial.date.getTime();
  }

  static of(initial: Mood, finishing: Mood): MoodTransition {
    return new MoodTransition(initial, finishing);
  }

  static ofSingleMood(single: Mood): MoodTransition {
    return new MoodTransition(single, single);
  }

}

export enum MoodCategory {
  HAPPY = '#f1a13f',
  OVER_THE_MOON = '#e3b21e',
  IN_LOVE = '#f14a7b',
  PRODUCTIVE = '#64d730',
  SAD = '#1d3ea0',
  SLEEPY = '#6decec',
  SICK = '#933ed2',
  ANGRY = '#d91313',
}

