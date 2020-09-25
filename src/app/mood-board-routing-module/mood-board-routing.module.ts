import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WeeklyMoodBoardComponent} from "../weekly-mood-board/weekly-mood-board.component";
import {DailyMoodContainerComponent} from "../daily-mood-container/daily-mood-container.component";

const routes: Routes = [
  {path: 'weekly-board', component: WeeklyMoodBoardComponent},
  {path: 'daily-board', component: DailyMoodContainerComponent},
  {path: '', redirectTo: '/weekly-board', pathMatch: 'full'},
  {path: '**', component: WeeklyMoodBoardComponent} // TODO mayby 404-not-found
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MoodBoardRoutingModule {
}
