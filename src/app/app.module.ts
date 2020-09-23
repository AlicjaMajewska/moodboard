import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { MoodCellComponent } from './mood-cell/mood-cell.component';
import { DailyMoodBoardComponent } from './daily-mood-board/daily-mood-board.component';
import { WeeklyMoodBoardComponent } from './weekly-mood-board/weekly-mood-board.component';
import { MontlyMoodBoardComponent } from './montly-mood-board/montly-mood-board.component';
import { YearlyMoodBoardComponent } from './yearly-mood-board/yearly-mood-board.component';
import { InsertMoodComponent } from './insert-mood/insert-mood.component';
import { NewMoodComponent } from './new-mood/new-mood.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MoodCellComponent,
    DailyMoodBoardComponent,
    WeeklyMoodBoardComponent,
    MontlyMoodBoardComponent,
    YearlyMoodBoardComponent,
    InsertMoodComponent,
    NewMoodComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
