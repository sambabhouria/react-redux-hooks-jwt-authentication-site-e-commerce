const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Bring in our dependencies
const routes = require("./routes");

//const exjwt = require("express-jwt");
const port = process.env.PORT || 3001;
//const { signUp, LogIn, welcome, refresh } = require("./handlers");

const app = express();
/*========= Here we want to let the server know that we should expect and allow a header with the content-type of 'Authorization' ============*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

/*========= This is the typical node server setup so we can be able to parse the requests/responses coming in and out of the server ============*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//  Connect all our routes to our application
app.use("/", routes);

// Turn on that server!
app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(
      "==> 🌎 📺 🙏 🚀 ⛵️ 💎 🛳  🦁 🍰 🏅✌️+❤️ Listening on port.",
      port
    );
  }
});
