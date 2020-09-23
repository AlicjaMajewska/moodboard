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
  durationInSeconds: number

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

export namespace MoodCategory {

  export function color(moodCategory: MoodCategory): string {
    return moodCategory.toString();
  }

  export function moodName(moodCategory: MoodCategory): string {
    return Object.keys(MoodCategory)
      .find(k => MoodCategory[k] == moodCategory)
      .toLowerCase()
      .replace(/_/g, ' ');
  }

  export function values() {
    return Object.keys(MoodCategory).map(k => MoodCategory[k]).filter(it => typeof it !== "function")
  }

  export function filename(moodCategory: MoodCategory): string {
    switch (moodCategory) {
      case MoodCategory.ANGRY:
        return 'emoji_27.gif';
      case MoodCategory.HAPPY:
        return 'emoji_18.gif'
      case MoodCategory.SICK:
        return 'emoji_6.gif';
      case MoodCategory.IN_LOVE:
        return 'emoji_11.gif'
      case MoodCategory.OVER_THE_MOON:
        return 'emoji_3.gif'
      case MoodCategory.PRODUCTIVE:
        return 'emoji_10.gif';
      case MoodCategory.SAD:
        return 'emoji_14.gif';
      case MoodCategory.SLEEPY:
        return 'emoji_19.gif'
      default:
        return 'emoji_7.gif';
    }
  }

}
