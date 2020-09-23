import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Mood, MoodCategory, MoodTransition} from "../mood";
import * as moment from 'moment'

@Component({
  selector: 'mb-mood-transition',
  templateUrl: './mood-transition.component.html',
  styleUrls: ['./mood-transition.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoodTransitionComponent {

  @Input() isLast: boolean;
  @Input() moodTransition: MoodTransition;

  determineColors(): string {
    const colorsAsText = this.getColor(this.moodTransition.initial) + ', ' + this.getColor(this.moodTransition.finishing);
    return `linear-gradient(to bottom, ${colorsAsText})`;
  }

  private getColor(mood: Mood) {
    return MoodCategory.color(mood.category);
  }

}
