import {Component, OnInit, Input} from '@angular/core';
import {Mood, MoodCategory} from '../mood';

@Component({
  selector: 'mb-mood-cell',
  templateUrl: './mood-cell.component.html',
  styleUrls: ['./mood-cell.component.sass']
})
export class MoodCellComponent implements OnInit {

  @Input() moods: Mood[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  determineColors(): string {
    const colorsAsText = this.moods
      .map(it => MoodCategory.color(it.category))
      .reduce((a, b) => a + ', ' + b);
    return `linear-gradient(to bottom, ${colorsAsText})`;
  }

}
