import {Component, Input} from '@angular/core';
import {Mood} from "../mood";

@Component({
  selector: 'mb-daily-mood-board',
  templateUrl: './daily-mood-board.component.html',
  styleUrls: ['./daily-mood-board.component.sass']
})
export class DailyMoodBoardComponent {

  @Input() moodsOfDay: Mood[] = [];
  @Input() date: Date;
  @Input() shortened: boolean;

}
