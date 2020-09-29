import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { MoodCellComponent } from './mood-cell/mood-cell.component';
import { DailyMoodBoardComponent } from './daily-mood-board/daily-mood-board.component';
import { WeeklyMoodBoardComponent } from './weekly-mood-board/weekly-mood-board.component';
import { MonthlyMoodBoardComponent } from './montly-mood-board/monthly-mood-board.component';
import { YearlyMoodBoardContainerComponent } from './yearly-mood-board/yearly-mood-board-container.component';
import { InsertMoodComponent } from './insert-mood/insert-mood.component';
import { NewMoodComponent } from './new-mood/new-mood.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MoodTransitionComponent } from './mood-transition/mood-transition.component';
import { MoodSummaryComponent } from './mood-summary/mood-summary.component';
import { CommonModule, DatePipe } from '@angular/common';
import { MoodIconComponent } from './mood-icon/mood-icon.component';
import { MoodBoardRoutingModule } from './mood-board-routing-module/mood-board-routing.module';
import { HotkeyModule } from 'angular2-hotkeys';
import { DailyMoodContainerComponent } from './daily-mood-container/daily-mood-container.component';
import { ChartsModule } from 'ng2-charts';
import { YearlyChartComponent } from './yearly-chart/yearly-chart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { YearlyMoodBoardInPixelsComponent } from './yearly-mood-board-in-pixels/yearly-mood-board-in-pixels.component';
import { MonthlyMoodBoardContainerComponent } from './monthly-mood-board-container/monthly-mood-board-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MoodCellComponent,
    DailyMoodBoardComponent,
    WeeklyMoodBoardComponent,
    MonthlyMoodBoardComponent,
    YearlyMoodBoardContainerComponent,
    InsertMoodComponent,
    NewMoodComponent,
    MoodTransitionComponent,
    MoodSummaryComponent,
    MoodIconComponent,
    DailyMoodContainerComponent,
    YearlyChartComponent,
    NavigationComponent,
    YearlyMoodBoardInPixelsComponent,
    MonthlyMoodBoardContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HotkeyModule.forRoot(),
    MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgbModule,
    MoodBoardRoutingModule,
    ChartsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
