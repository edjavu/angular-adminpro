import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  // Doughnut

  @Input() title: string  = 'Sin titulo';

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Label-A', 'Label-B', 'Label-C'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

}
