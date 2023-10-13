const express = require("express");
const app = express();

/* for user ===> hosein root */
app.all("/secure/hosein", (req, res) => {
  res.send(
    process.env.HOSEIN1 +
      "        " +
      process.env.HOSEIN2 +
      "        " +
      process.env.HOSEIN4 +
      "        " +
      process.env.HOSEIN5 +
      "        " +
      process.env.HOSEIN6
  );
});

/* for user ===> ghazal */
app.all("/secure/ghazal", (req, res) => {
  res.send(
    process.env.GHAZAL1 +
      "        " +
      process.env.GHAZAL2 +
      "        " +
      process.env.GHAZAL3
  );
});

/* for user ===> raheleh */
app.all("/secure/raheleh", (req, res) => {
  res.send(
    process.env.RAHELEH1 +
      "        " +
      process.env.RAHELEH2 +
      "        " +
      process.env.RAHELEH3
  );
});

/* for user ===> zahra */
app.all("/secure/zahra", (req, res) => {
  res.send(
    process.env.ZAHRA1 +
      "        " +
      process.env.ZAHRA2 +
      "        " +
      process.env.ZAHRA3
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
