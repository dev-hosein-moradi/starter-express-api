const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow   " +
      "    vless://4a1518c2-1577-4a59-a69d-75d04eb26173@91.193.43.168:8443?type=tcp&security=reality&fp=chrome&pbk=1VHvPIzchFjRqyz0qGgRCMNxKfPVNf5YWjDtxjZWEjo&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=77b8e452&spx=%2F#hosein-ams-     "
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow   "
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow   "
  );
});

/* for user ===> ghazal  */
app.all("/ghazal", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow   "
  );
});

/* for user ===> somayeh ios */
app.all("/somayeh", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow"
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow   "
  );
});

/* for user ===> khatereh */
app.all("/khatereh", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow   "
  );
});

/* for user ===> radan */
app.all("/radan", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow     "
  );
});

/* for user ===> mohsen */
app.all("/mohsen", (req, res) => {
  res.send(
    "   vless://cb034d85-fae7-429b-a1b8-98a8dc4256fa@185.17.0.137:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#sup-mscow   "
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
