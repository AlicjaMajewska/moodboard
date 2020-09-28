import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mood, MoodTransition } from '../mood';
import { MoodCategoryUtil } from '../mood-category-util';

@Component({
  selector: 'mb-mood-transition',
  templateUrl: './mood-transition.component.html',
  styleUrls: ['./mood-transition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoodTransitionComponent {

  @Input() shortened: boolean;
  @Input() isLast: boolean;
  @Input() isFirst: boolean;
  @Input() moodTransition: MoodTransition;

  determineColors(): string {
    const colorsAsText = this.getColor(this.moodTransition.initial) + ', ' + this.getColor(this.moodTransition.finishing);
    return `linear-gradient(to bottom, ${colorsAsText})`;
  }

  shouldShowLastMood(): boolean {
    return this.isLast && this.moodTransition.initial !== this.moodTransition.finishing;
  }

  private getColor(mood: Mood): string {
    return MoodCategoryUtil.color(mood.category);
  }
}
