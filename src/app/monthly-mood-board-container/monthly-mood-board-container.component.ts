import { Component, OnInit } from '@angular/core';
import { Mood } from '../mood';
import { MoodService } from '../mood.service';

@Component({
  selector: 'mb-monthly-mood-board-container',
  templateUrl: './monthly-mood-board-container.component.html',
  styleUrls: ['./monthly-mood-board-container.component.sass']
})
export class MonthlyMoodBoardContainerComponent implements OnInit {
  date: Date = new Date(); // TODO
  moodsOfTheMonth: Mood[] = [];

  constructor(private moodService: MoodService) {
  }

  ngOnInit(): void {
    this.moodsOfTheMonth = this.moodService.moods;
  }

}
