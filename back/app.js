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

//Cross Domain CORS whitlist
const whitelist = ["http://localhost:1234", 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A1234%2Fauth%2Fgoogle%2Fcallback&scope=profile&client_id=193964470484-henq5mudtrk6d59dj4g93jmnbeuhimo3.apps.googleusercontent.com'];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
};

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
