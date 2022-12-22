const express = require("express");
const dbConnect = require("./dbConnect");

const path = require("path");
const userRoute = require("./routes/usersRoute");

const app = express();
const transactionsRoute = require("./routes/transactionsRoute");
app.use("/api/users/", userRoute);
app.use("/api/transactions/", transactionsRoute);

const port = process.env.PORT || 7010;

app.use("/", express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});

app.listen(port, () => console.log(`Node JS Server started at port ${port}!`));
