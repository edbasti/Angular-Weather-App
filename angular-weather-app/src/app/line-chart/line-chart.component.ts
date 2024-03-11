import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() data: any;
  public chart: any;
  public labels: any[] = [];
  public tempData: any[] = [];
  public humidityData: any[] = [];
  public precipitationData: any[] = [];

  ngOnInit(): void {
    this.labels = this.data?.map((item: any) => {
      return item?.day;
    });
    this.tempData = this.data?.map((item: any) => {
      return item?.temperature;
    });
    this.humidityData = this.data?.map((item: any) => {
      return item?.humidity;
    });
    this.precipitationData = this.data?.map((item: any) => {
      return item?.precipitation;
    });
    this.createChart();
  }

  ngOnChanges(): void {
    const backgroundColor = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
    ];
    const borderColor = [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
    ];
    this.labels = this.data?.map((item: any) => {
      return item?.day;
    });
    this.tempData = this.data?.map((item: any) => {
      return item?.temperature;
    });
    this.humidityData = this.data?.map((item: any) => {
      return item?.humidity;
    });
    this.precipitationData = this.data?.map((item: any) => {
      return item?.precipitation;
    });
    let newData = {
      labels: this.labels,
      datasets: [
        {
          label: 'Temperature (degress Fahrenheit)',
          data: this.tempData,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
        {
          label: 'Relative Humidity (%)',
          data: this.humidityData,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
        {
          label: 'Probability Of Precipitation (%)',
          data: this.precipitationData,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
      ],
    };
    this.chart.data = newData;
    this.chart.update();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: this?.labels,
        datasets: [
          {
            label: 'Temperature (degress Fahrenheit)',
            data: this.tempData,
          },
          {
            label: 'Relative Humidity (%)',
            data: this.humidityData,
          },
          {
            label: 'Probability Of Precipitation (%)',
            data: this.precipitationData,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
