const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "    vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox    " 
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox"
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox"
  );
});

/* for user ===> ghazal  */
app.all("/ghazal", (req, res) => {
  res.send(
    "vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox"
  );
});

/* for user ===> somayeh ios */
app.all("/somayeh", (req, res) => {
  res.send(
    "vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox"
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox"
  );
});

/* for user ===> radan */
app.all("/radan", (req, res) => {
  res.send(
    "vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox"
  );
});

/* for user ===> mohsen */
app.all("/mohsen", (req, res) => {
  res.send(
    "vless://b660fc80-e0ae-481d-81b1-bc7b8672ff3d@94.228.164.72:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=qF002EZCDlyZhCA1olOx-8hC2ndUO6nNyUPbmx_ZWH8&sid=f29d9bb07e9fe1c8&type=tcp&headerType=none#swe-singbox"
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
