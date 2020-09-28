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
  moodTransitions: MoodTransition[] = [];
  private fullTimeRange: number;

  @Input()
  set moods(newMoods: Mood[]) {
    this.moodTransitions = this.mapToMoodTransitions(newMoods);
    this.fullTimeRange = this.calculateFullTimeRange(newMoods);
  }

  calculateHeightOfTransition(moodTransition: MoodTransition): string {
    if (this.fullTimeRange === 0) {
      return '100%';
    }
    return (moodTransition.durationInSeconds * 100 / this.fullTimeRange) + '%';
  }

  private calculateFullTimeRange(newMoods: Mood[]): number {
    if (newMoods.length <= 1) {
      return 0;
    }
    const firstMoodTime = newMoods[0].date.getTime();
    const lastMoodTime = newMoods[newMoods.length - 1].date.getTime();

    return lastMoodTime - firstMoodTime;
  }

  private mapToMoodTransitions(newMoods: Mood[]): MoodTransition[] {
    const moodTransitions: MoodTransition[] = [];
    if (newMoods.length === 1) {
      moodTransitions.push(MoodTransition.ofSingleMood(newMoods[0]));
    }
    for (let i = 0; i + 1 < newMoods.length; i++) {
      moodTransitions.push(MoodTransition.of(newMoods[i], newMoods[i + 1]));
    }
    return moodTransitions;
  }
}
