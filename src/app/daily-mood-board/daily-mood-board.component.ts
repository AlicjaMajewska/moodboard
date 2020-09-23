import {Component, Input, OnInit} from '@angular/core';
import {Mood} from "../mood";

@Component({
  selector: 'mb-daily-mood-board',
  templateUrl: './daily-mood-board.component.html',
  styleUrls: ['./daily-mood-board.component.sass']
})
export class DailyMoodBoardComponent implements OnInit {

  @Input() moods: Mood[] = [];

  ngOnInit(): void {
  }

}
