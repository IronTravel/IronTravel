require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const DBURL = process.env.DBURL;
const session=require("express-session")
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);

mongoose
  .connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Cross Domain CORS whitlist
// const whitelist = ["http://localhost:1234", "http://localhost:3005"]
// const corsOptions = {
//   origin: function(origin, callback) {
//     // if (!origin) return callback(null, true);
//     if (whitelist.indexOf(origin) !== -1) {
//       // corsOptions = { origin: true } 
//       callback(null, true);
//     } else {
//       // corsOptions = { origin: false } 
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// };

var corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
// app.use(cors(corsOption));


// var whitelist = ["http://localhost:1234"]
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = {  
//       origin: include,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 204
//   } // reflect (enable) the requested origin in the CORS response
//   } else {
//     req.header('Origin')
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }




// Middleware Setup
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
require("./passport")(app);

// Router
const index = require("./routes/index");
app.use("/", index);

const auth = require("./routes/auth");
app.use("/auth", auth);

const data = require("./routes/data");
app.use("/data", data);

const users = require("./routes/users");
app.use("/users", users);

const travels = require("./routes/travels");
app.use("/travels", travels);

const tours = require("./routes/tours");
app.use("/tours", tours);

module.exports = app;
