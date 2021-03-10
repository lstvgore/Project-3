const express = require("express");
const app = express();
// const config=require("./Models/userModel")
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/api-routes')(app);
mongoose.connect(
  process.env.MONGO_URI || "mongo://localhost/jwt-auth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connected to mongoDB");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use("/api", require("./routes/api-routes.js"));
// app.use("/", require("./routes/html-routes"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client"));
});

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`));
