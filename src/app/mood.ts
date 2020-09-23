export class Mood {
    date: Date;
    category?: MoodCategory;
    summary?: string;
}

export enum MoodCategory {
    HAPPY = '#f1a13f',
    SAD = '#1d3ea0',
    PRODUCTIVE = '#64d730',
    ANGRY = '#d91313',
    SICK = '#933ed2',
    OVER_THE_MOON = '#e3b21e',
    IN_LOVE = '#f14a7b'
}

 export namespace MoodCategory {
    export function color(moodCategory: MoodCategory): string {
      debugger;
        return moodCategory.toString();
    }
}
