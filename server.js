// const { engine } = require("express-handlebars");
const express = require("express");
const app = express();
const path = require('path');
const { create } = require('express-handlebars');
const cors = require("cors");
require("dotenv/config");

const expressHbs = require("express-handlebars");

// instatiating template engine

app.engine(".hbs", expressHbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./src/views");

var hbs = expressHbs.create({});




const PORT = process.env.PORT;

/**_________________________Require Endpoints__________________________ */
const home= require("./src/controllers/routes.home");
const orderForm= require("./src/controllers/routes.orderform");
const ordersHistory = require("./src/controllers/routes.orders");
const vendorUpdate= require("./src/controllers/routes.update-vendor");

/**_________________________________ Middleware ________________________________ */
// header preflight configuration to prevent cors error
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
    credentials: false,
  })
);

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// make folders visible
app.use(express.static(path.join(__dirname,'src/public')));

/** _______________________________API ROUTES_________________________________ */
app.use("/", home);
app.use("/home", home);
app.use("/orderform", orderForm);
app.use("/order-history", ordersHistory);
app.use("/update-vendor", vendorUpdate);


app.listen(PORT || 3000, () => {
  console.log("server started on port", PORT);
});
