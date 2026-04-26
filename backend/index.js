const express = require("express");
const app = express();
//using cors and inbuiltbodyParser in express middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const frontend_API = process.env.FRONTEND_URL;
const dashboard_API = process.env.DASHBOARD_URL;

const cors = require("cors");
app.use(cors({
    origin: [frontend_API, dashboard_API], // 👈 yahan frontend ka exact origin likho
    credentials: true, // 👈 cookies / tokens allow karne ke liye
  }));  

//for .env file
require("dotenv").config();

// for database to connect with nodejs
const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;

const PORT = process.env.PORT || 2000;

//Models
const HoldingsModel = require("./model/HoldingsModel.js");
const PositionsModel = require("./model/PositionsModel.js");
const OrdersModel = require("./model/OrdersModel.js");
// app.use(express.json());

mongoose.connect(uri)
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });

  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

//Cookie Parser
const cookieParser = require("cookie-parser");
app.use(cookieParser("secret")); // now we can print aour cookies on server by writing req.cookies..... "secret" added this to send signed cookie if needed

// //Express Session
// const session = require("express-session");
// app.use(
//   session({
//     secret: "secret", // secret key to sign the session ID cookie
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: false, // means Cookie normal HTTP (localhost, unencrypted) requests me bhi send hogi ✅ or can set httpOnly to true 
//       expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//       maxAge: 7 * 24 * 60 * 60 * 1000,

//     },
//   })
// ); // now we can track requests by a particular user using express session  by writing req.session.......

const authRouter = require("./routes/AuthRoute.js");
app.use("/auth", authRouter);

// Seting Up The Routes and Router

const Router = express.Router();

//Api ENDPOINTS


app.get("/get"  ,(req, res)=>{
    const {name} =req.query;

    res.send(`Hello ${name}`);
})












app.get("/allHoldings", async (req, res) => {
  const allholdings = await HoldingsModel.find({});
  res.send(allholdings);
  // res.json(allholdings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.send(allPositions);
  // res.json(allholdings);
});

app.post("/newOrder", async (req, res) => {
  // const newOrder = {
  //     name: req.body.name,
  //     qty: req.body.qty,
  //     price: req.body.price,
  //     mode: req.body.mode

  // }
  // const orderSaved = await OrdersModel.insertOne(newOrder).then(()=>{console.log("Order Placed")});

  // console.log("orderSaved" + orderSaved);
  // res.send("Order Placed");

  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save().then(() => {
    console.log("Order Placed");
  });
  res.send("Order Placed");
});
