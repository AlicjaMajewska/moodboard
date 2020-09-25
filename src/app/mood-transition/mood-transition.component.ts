import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mood, MoodCategory, MoodTransition } from "../mood";

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

  shouldShowLastMood() {
    return this.isLast && this.moodTransition.initial !== this.moodTransition.finishing;
  }

  private getColor(mood: Mood) {
    return MoodCategory.color(mood.category);
  }
}
