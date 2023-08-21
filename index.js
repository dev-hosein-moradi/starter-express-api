const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "    vless://d5d50475-af79-47e6-ae27-feb47aba35f3@msc.devhosein.fun:443?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1#russia-46u90yze    " 
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "vless://d5d50475-af79-47e6-ae27-feb47aba35f3@msc.devhosein.fun:443?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1#russia-46u90yze"
  );
});

/* for user ===> ghazal  */
app.all("/ghazal", (req, res) => {
  res.send(
    "vless://d5d50475-af79-47e6-ae27-feb47aba35f3@msc.devhosein.fun:443?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1#russia-46u90yze"
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "vless://d5d50475-af79-47e6-ae27-feb47aba35f3@msc.devhosein.fun:443?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1#russia-46u90yze"
  );
});

/* for user ===> radan */
app.all("/radan", (req, res) => {
  res.send(
    "vless://d5d50475-af79-47e6-ae27-feb47aba35f3@msc.devhosein.fun:443?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1#russia-46u90yze"
  );
});

/* for user ===> mohsen */
app.all("/mohsen", (req, res) => {
  res.send(
    "vless://d5d50475-af79-47e6-ae27-feb47aba35f3@msc.devhosein.fun:443?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1#russia-46u90yze"
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
