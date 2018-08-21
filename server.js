// ============ Various Helper Libraries ============ 
const path = require('path');
// ==================================================



// ============ Express ============ 
const express = require('express');
const app = express();
// =================================



// ============ Body Parser ============ 
// Will require: express/app
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// =====================================



// ============ View Engine ============ 
// Will require: express/app
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// =====================================



// ============ Session ============ 
// Will require: express/app
// const session = require('express-session');
// app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 600000 }
// }))
// =================================



// ============ Flash ============ 
// Will require: express/app, express-session
// const flash = require('express-flash');
// app.use(flash());
// ===============================







// ============ Static Routes ============ 
// Will use: path 
app.use(express.static(path.join(__dirname, "angular-weatherapi/dist/angular-weatherapi")));
// =======================================



// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./angular-weatherapi/dist/angular-weatherapi/index.html"))
});


var js = {
  "coord": {
    "lon": -118.33,
    "lat": 34.18
  },
  "weather": [{
    "id": 800,
    "main": "Clear",
    "description": "clear sky",
    "icon": "01d"
  }],
  "base": "stations",
  "main": {
    "temp": 301.41,
    "pressure": 1012,
    "humidity": 58,
    "temp_min": 297.15,
    "temp_max": 308.15
  },
  "visibility": 16093,
  "wind": {
    "speed": 5.1,
    "deg": 180
  },
  "clouds": {
    "all": 1
  },
  "dt": 1534809480,
  "sys": {
    "type": 1,
    "id": 362,
    "message": 0.0047,
    "country": "US",
    "sunrise": 1534857544,
    "sunset": 1534905191
  },
  "id": 5331835,
  "name": "Burbank",
  "cod": 200
}




// ============ Server ============ 
// Will require: express/app 
app.listen(8000);
// ================================

