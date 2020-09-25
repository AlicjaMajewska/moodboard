import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Mood, MoodTransition } from '../mood';

@Component({
  selector: 'mb-mood-cell',
  templateUrl: './mood-cell.component.html',
  styleUrls: ['./mood-cell.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoodCellComponent {

  @Input() shortened: boolean;
  moodTransitions = [];
  private fullTimeRange = 0;

  private _moods: Mood[] = [];

  @Input()
  set moods(newMoods: Mood[]) {
    this._moods = newMoods;
    this.moodTransitions = this.mapToMoodTransitions();
    this.fullTimeRange = this.calculateFullTimeRange();
  }

  calculateHeightOfTransition(moodTransition: MoodTransition): string {
    if (this.fullTimeRange == 0) {
      return '100%'
    }
    return (moodTransition.durationInSeconds * 100 / this.fullTimeRange) + '%';
  }

  private calculateFullTimeRange(): number {
    if (this._moods.length <= 1) {
      return 0;
    }
    const firstMoodTime = this._moods[0].date.getTime();
    const lastMoodTime = this._moods[this._moods.length - 1].date.getTime();

    return lastMoodTime - firstMoodTime;
  }

  private mapToMoodTransitions(): MoodTransition[] {
    const moodTransitions = [];
    if (this._moods.length === 1) {
      moodTransitions.push(MoodTransition.ofSingleMood(this._moods[0]));
    }
    for (let i = 0; i + 1 < this._moods.length; i++) {
      moodTransitions.push(MoodTransition.of(this._moods[i], this._moods[i + 1]));
    }
    return moodTransitions;
  }
}
