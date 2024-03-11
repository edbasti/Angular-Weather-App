import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getweather(city: string) {
    return this.http.get(
      `https://api.weather.gov/gridpoints/${city}/31,80/forecast`
    );
  }
}
