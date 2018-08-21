import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  location: any;
  constructor(private _weatherService: WeatherService) { 
    this.location = { "name": "", "weather": "" };
  }

  ngOnInit() {
    this.getBurbank()
  }


  getBurbank() {
    console.log("APP COMPONENT TS!!!");
    this._weatherService.getBurbank().subscribe(
      response => {
        console.log("API REPSONSE", response);
        this.location = response;
      },
      err => {
        console.log(err);
      }
    );
  }


}
