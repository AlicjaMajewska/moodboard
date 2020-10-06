import { Component, OnInit } from '@angular/core';
import { Mood } from '../mood';
import { MoodService } from '../mood.service';
import * as moment from 'moment';

@Component({
  selector: 'mb-monthly-mood-board-container',
  templateUrl: './monthly-mood-board-container.component.html',
  styleUrls: ['./monthly-mood-board-container.component.sass']
})
export class MonthlyMoodBoardContainerComponent implements OnInit {
  date: Date = moment().startOf('month').toDate(); // TODO as url param
  moodsOfTheMonth: Mood[] = [];

  constructor(private moodService: MoodService) {
  }

  ngOnInit(): void {
    this.moodsOfTheMonth = this.moodService.moods;
  }

}
