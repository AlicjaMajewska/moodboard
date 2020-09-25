import { Component, OnInit } from '@angular/core';
import { Mood } from "./mood";
import { MoodService } from "./mood.service";

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private moodService: MoodService) {
  }

  ngOnInit(): void {
  }

}
