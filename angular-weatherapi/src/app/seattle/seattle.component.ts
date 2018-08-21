import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
location:any;
  constructor(private _weatherService: WeatherService) { 
    this.location = { "name": "", "weather": "" };
  }

  ngOnInit() {
   this.getSeattle();
  }

  getSeattle() {
    console.log("from get seattle component.ts!!!");
    this._weatherService.getSeattle().subscribe(
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
