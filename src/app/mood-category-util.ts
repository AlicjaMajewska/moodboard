import { MoodCategory } from './mood';

export class MoodCategoryUtil {

  static color(moodCategory: MoodCategory): string {
    return moodCategory.toString();
  }

  static moodName(moodCategory: MoodCategory): string {
    const moodNameOptional: string | undefined = Object.keys(MoodCategory)
      .find(k => MoodCategory[k] === moodCategory);
    return (moodNameOptional || 'unknown').toLowerCase()
      .replace(/_/g, ' ');
  }

  static values(): MoodCategory[] {
    return Object.keys(MoodCategory).map(k => MoodCategory[k]).filter(it => typeof it !== 'function');
  }

  static filename(moodCategory: MoodCategory): string {
    switch (moodCategory) {
      case MoodCategory.ANGRY:
        return 'emoji_27.gif';
      case MoodCategory.HAPPY:
        return 'emoji_18.gif';
      case MoodCategory.SICK:
        return 'emoji_6.gif';
      case MoodCategory.IN_LOVE:
        return 'emoji_11.gif';
      case MoodCategory.OVER_THE_MOON:
        return 'emoji_3.gif';
      case MoodCategory.PRODUCTIVE:
        return 'emoji_10.gif';
      case MoodCategory.SAD:
        return 'emoji_14.gif';
      case MoodCategory.SLEEPY:
        return 'emoji_19.gif';
      default:
        return 'emoji_7.gif';
    }
  }

}
