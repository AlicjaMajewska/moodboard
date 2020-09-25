import { Component, OnInit } from '@angular/core';
import { MoodService } from "../mood.service";
import { Mood } from "../mood";
import * as moment from "moment";

@Component({
  selector: 'mb-yearly-mood-board',
  templateUrl: './yearly-mood-board-container.component.html',
  styleUrls: ['./yearly-mood-board-container.component.sass']
})
export class YearlyMoodBoardContainerComponent implements OnInit {

  date = new Date(); // TODO
  moodsByYear: Mood[] = [];

  constructor(private moodService: MoodService) {
  }

  ngOnInit(): void {
    this.moodsByYear = this.moodService.getMoodsByYear(moment(this.date).startOf('year').toDate());
  }

}
