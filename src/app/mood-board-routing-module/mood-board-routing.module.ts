import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyMoodBoardComponent } from '../weekly-mood-board/weekly-mood-board.component';
import { DailyMoodContainerComponent } from '../daily-mood-container/daily-mood-container.component';
import { YearlyMoodBoardContainerComponent } from '../yearly-mood-board/yearly-mood-board-container.component';

const routes: Routes = [
  {path: 'yearly-board', component: YearlyMoodBoardContainerComponent},
  {path: 'weekly-board', component: WeeklyMoodBoardComponent},
  {path: 'daily-board/:date', component: DailyMoodContainerComponent},
  {path: 'daily-board', component: DailyMoodContainerComponent},
  {path: '', redirectTo: '/weekly-board', pathMatch: 'full'},
  {path: '**', component: WeeklyMoodBoardComponent} // TODO maybe 404-not-found
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MoodBoardRoutingModule {
}
