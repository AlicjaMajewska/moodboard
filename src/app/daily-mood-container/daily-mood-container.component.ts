import { Component, OnInit } from '@angular/core';
import { MoodService } from "../mood.service";
import * as moment from 'moment'
import { Mood } from "../mood";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mb-daily-mood-container',
  templateUrl: './daily-mood-container.component.html',
  styleUrls: ['./daily-mood-container.component.sass']
})
export class DailyMoodContainerComponent implements OnInit {
  date: Date;
  moodsOfDay: Mood[] = []

  constructor(private moodService: MoodService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const dateAsParam = params['date'];
      console.log(moment(dateAsParam, "MM-DD-YYYY").toDate());
      this.date = dateAsParam ? moment(dateAsParam, 'MM-DD-YYYY').toDate() : moment().startOf('day').toDate()
      this.moodsOfDay = this.moodService.getMoodsByDate(this.date);
    });
  }

}
