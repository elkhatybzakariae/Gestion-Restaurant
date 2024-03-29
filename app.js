// const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');



const port = process.env.NODE_PORT || 3001;

// Use .env
require("dotenv").config({ path: "./.env" });

const app = express();



// CORS Headers
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/api', require('./routes/index'));
app.use('/user', require('./routes/userRoute'));
app.use('/role', require('./routes/roleRoute'));
app.use('/category', require('./routes/categoryRoute'));
app.use('/reservation', require('./routes/reservationRoute'));
app.use('/product', require('./routes/productRoute'));
app.use('/order', require('./routes/orderRoute'));
app.use('/order/item', require('./routes/orderItemRoute'));
app.use("/hubs", require("./routes/hubeRoute"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

// MongoDB Connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB', err));



// Start the server
app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);

module.exports = app;
