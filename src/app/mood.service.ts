import {Injectable} from '@angular/core';
import {Mood} from "./mood";
import {MoodTestingFactory} from "./mood-testing-factory";

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  moods: Mood[] = [];

  constructor() {
    this.moods = MoodTestingFactory.createMoods()
  }

  displayNewMood(mood: Mood): void {
    this.moods = [...this.moods, mood];
  }

}
