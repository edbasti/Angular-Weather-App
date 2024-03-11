import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];

  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'LWX';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
    /*if (this.chartInfo != null) {
      for (let i = 0; i < this.myWeather.length; i++) {
        this.labeldata.push(this.myWeather[i].day);
        this.realdata.push(this.myWeather[i].temperature);
      }
      this.chartsService.createChart(
        this.labeldata,
        this.realdata,
        this.colordata
      );
    } */
  }

  getWeather() {
    this.weatherService.getweather(this.city).subscribe({
      next: (res: any) => {
        this.myWeather = res?.properties?.periods?.map((item: any) => {
          console.log(item);
          return {
            id: item?.number,
            summary: item?.shortForecast,
            day: item?.name,
            temperature: item?.temperature,
            uom: item?.temperatureUnit,
            humidity: item?.relativeHumidity?.value,
            windDirection: item?.windDirection,
            windSpeed: item?.windSpeed,
            iconURL: item?.icon,
            precipitation: item?.probabilityOfPrecipitation?.value,
          };
        });
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed'),
    });
  }

  onChange(newValue: string) {
    this.city = newValue;
    this.getWeather();
  }
}
