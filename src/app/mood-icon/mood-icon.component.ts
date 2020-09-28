import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MoodCategoryUtil } from '../mood-category-util';
import { MoodCategory } from '../mood';

@Component({
  selector: 'mb-mood-icon',
  templateUrl: './mood-icon.component.html',
  styleUrls: ['./mood-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoodIconComponent {

  @Input() size: number;
  @Input() category: MoodCategory;

  nameOfMood(moodCategory: MoodCategory): string {
    return MoodCategoryUtil.moodName(moodCategory);
  }

  pathToMoodIcon(moodCategory: MoodCategory): string {
    return '/assets/icons/emoji_gif_100px/' + MoodCategoryUtil.filename(moodCategory);
  }
}
