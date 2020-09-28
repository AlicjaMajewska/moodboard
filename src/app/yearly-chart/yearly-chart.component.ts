import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Mood } from '../mood';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { MoodCategoryUtil } from '../mood-category-util';

@Component({
  selector: 'mb-yearly-chart',
  templateUrl: './yearly-chart.component.html',
  styleUrls: ['./yearly-chart.component.sass']
})
export class YearlyChartComponent implements OnInit {

  @Input() moodsByYear: Mood[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
  };
  public pieChartLabels: Label[2];
  public pieChartType: ChartType = 'pie';
  public pieChartData;
  public pieChartLegend = true;
  public pieChartPlugins = [{
    afterDraw: chart => {
      const ctx = chart.chart.ctx;
      // TODO dodać ikony
    }
  }];
  public pieChartColors;

  ngOnInit(): void {
// @ts-ignore
    this.pieChartLabels = MoodCategoryUtil.values().map(it => MoodCategoryUtil.moodName(it)).map(it => it.split(' '));
    this.pieChartData = MoodCategoryUtil.values().map(color => this.moodsByYear.filter(mood => mood.category === color).length);
    this.pieChartColors = [
      {
        backgroundColor: MoodCategoryUtil.values(),
      },
    ];
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

}
