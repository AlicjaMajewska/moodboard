import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MoodCategory } from "../mood";

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
    return MoodCategory.moodName(moodCategory);
  }

  pathToMoodIcon(moodCategory: MoodCategory): string {
    return '/assets/icons/emoji_gif_100px/' + MoodCategory.filename(moodCategory);
  }
}
