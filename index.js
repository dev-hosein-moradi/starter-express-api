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
    "vless://1342f5c5-85e2-49ed-992c-dc40077a829c@91.193.43.168:2087?type=tcp&security=reality&fp=chrome&pbk=o99RLQVgVimV0NWOm0Hi1xFHhMPpEXPNCLyGiCQbyXA&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=2a6fc511&spx=%2F#ams-reality-mohamad"
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "vless://3c71a6e7-f73c-48f7-ae70-26af72509b15@91.193.43.168:2087?type=tcp&security=reality&fp=chrome&pbk=o99RLQVgVimV0NWOm0Hi1xFHhMPpEXPNCLyGiCQbyXA&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=2a6fc511&spx=%2F#ams-reality-raheleh"
  );
});

/* for user ===> ghazal  */
app.all("/ghazal", (req, res) => {
  res.send(
    "vless://0417b197-73c7-481f-82b5-8846120de42b@91.193.43.168:2087?type=tcp&security=reality&fp=chrome&pbk=o99RLQVgVimV0NWOm0Hi1xFHhMPpEXPNCLyGiCQbyXA&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=2a6fc511&spx=%2F#ams-reality-ghazal"
  );
});

/* for user ===> somayeh ios */
app.all("/somayeh", (req, res) => {
  res.send(
    "vless://0b2ad96f-8f95-4981-99d7-0bb19c007973@91.193.43.168:2087?type=tcp&security=reality&fp=chrome&pbk=o99RLQVgVimV0NWOm0Hi1xFHhMPpEXPNCLyGiCQbyXA&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=2a6fc511&spx=%2F#ams-reality-somayeh"
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "vless://aac3a7df-101e-4564-8915-2f9453e3cee6@91.193.43.168:2087?type=tcp&security=reality&fp=chrome&pbk=o99RLQVgVimV0NWOm0Hi1xFHhMPpEXPNCLyGiCQbyXA&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=2a6fc511&spx=%2F#ams-reality-yasna"
  );
});

/* for user ===> radan */
app.all("/radan", (req, res) => {
  res.send(
    "vless://f9bfa6a2-46e8-493e-aed2-a145b6d7cde6@91.193.43.168:2087?type=tcp&security=reality&fp=chrome&pbk=o99RLQVgVimV0NWOm0Hi1xFHhMPpEXPNCLyGiCQbyXA&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=2a6fc511&spx=%2F#ams-reality-radan"
  );
});

/* for user ===> mohsen */
app.all("/mohsen", (req, res) => {
  res.send(
    "vless://2b3110ff-f395-4746-a1ab-fd14c5aa642f@91.193.43.168:2087?type=tcp&security=reality&fp=chrome&pbk=o99RLQVgVimV0NWOm0Hi1xFHhMPpEXPNCLyGiCQbyXA&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=2a6fc511&spx=%2F#ams-reality-mohsen"
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
