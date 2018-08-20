import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { WeatherService } from "./weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  location: any;
  locations: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _weatherService: WeatherService
  ) {
    this.location = { name: "", weather: "" };
    this.locations = [];
  }

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => {
    //   console.log(params['id'])
    // });
    this.getWeather();
  }
  goHome() {
    this._router.navigate(["/home"]);
  }
  // get weather for one location
  getWeather() {
    console.log("APP COMPONENT TS!!!");
    this._weatherService.getWeather().subscribe(
      response => {
        console.log("API REPSONSE", response);
        this.location = response;
      },
      err => {
        console.log(err);
      }
    );
  }
  getSeattle() {
    console.log("SeattleComponent!!!");
    this._weatherService.getWeather().subscribe(
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
