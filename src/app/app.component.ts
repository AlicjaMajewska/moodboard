import {Component, OnInit} from '@angular/core';
import {Mood, MoodCategory} from './mood';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'mood-board';
  moods: Mood[] = [];


  ngOnInit(): void {
    this.moods.push(this.createMood(MoodCategory.OVER_THE_MOON));
    this.moods.push(this.createMood(MoodCategory.HAPPY));
    this.moods.push(this.createMood(MoodCategory.ANGRY));
    this.moods.push(this.createMood(MoodCategory.SAD));
  }

  createMood(moodCategory: MoodCategory): Mood {
    const mood = new Mood()
    mood.category = moodCategory;
    mood.date = new Date();
    return mood;
  }

  displayNewMood(mood: Mood) {
    this.moods.push(mood);
  }
}
