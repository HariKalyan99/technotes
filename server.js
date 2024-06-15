require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes")
const app = express();
const PORT = process.env.PORT || 8081;
const DB_URI = process.env.DATABASE_URL;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/notes", noteRoutes)

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log(`Connected to mongo DB server`);
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`Connection unsuccessfull`, error);
  });
