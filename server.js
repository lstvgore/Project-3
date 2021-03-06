const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(
//   process.env.MONGO_URI || "mongo://localhost/jwt-auth",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   },
//   (err) => {
//     if (err) throw err;
//     console.log("connected to mongoDB");
//   }
// );

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use("/api", require("./routes/api-routes.js"));
// app.use("/", require("./routes/html-routes"));

app.listen(PORT, () => console.log(`listening to http://localhost:${PORT}`));
