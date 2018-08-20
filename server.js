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






// ============ Server ============ 
// Will require: express/app 
app.listen(8000);
// ================================

