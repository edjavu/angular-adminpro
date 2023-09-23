import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public data1: ChartData<'doughnut'> = {
    labels: ['Pan', 'Leche', 'Fideo'],
    datasets: [
      {
        data: [12, 50, 23],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      },
    ],
  };

  public data2: ChartData<'doughnut'> = {
    labels: ['Guineo', 'Kiwi', 'Mango'],
    datasets: [
      {
        data: [75, 20, 5],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      },
    ],
  };

}
