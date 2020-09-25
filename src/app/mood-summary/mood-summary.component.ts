import { Component, Input } from '@angular/core';
import * as moment from "moment";
import { Mood } from "../mood";

@Component({
  selector: 'mb-mood-summary',
  templateUrl: './mood-summary.component.html',
  styleUrls: ['./mood-summary.component.sass']
})
export class MoodSummaryComponent {

  @Input() mood: Mood;

  time(date: Date): string {
    return moment(date).format('LT')
  }

}
