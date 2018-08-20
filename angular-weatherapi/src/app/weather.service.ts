import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { api } from "./api";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  getWeather() {
    console.log("getweather!!!!!");
    // return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fc6a225c918a20f22830de23552ddd71')
    return this._http.get(
      "http://api.openweathermap.org/data/2.5/weather?q=burbank,us&appid=fc6a225c918a20f22830de23552ddd71"
    );
  }


getSeattle() {
  console.log("seattleweather!!!!!");
  // return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fc6a225c918a20f22830de23552ddd71')
  return this._http.get(
    "http://api.openweathermap.org/data/2.5/weather?q=seattle,us&appid=fc6a225c918a20f22830de23552ddd71"
  );
}
}



