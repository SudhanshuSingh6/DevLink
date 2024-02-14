const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

connectDB();

//Init Middleware
app.use(express.json());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname)));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
