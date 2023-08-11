const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "    vless://4a1518c2-1577-4a59-a69d-75d04eb26173@91.193.43.168:8443?type=tcp&security=reality&fp=chrome&pbk=1VHvPIzchFjRqyz0qGgRCMNxKfPVNf5YWjDtxjZWEjo&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=77b8e452&spx=%2F#hosein-ams     " +
      "    vless://b8dff6cb-21c9-4d69-ad44-235a76814235@91.193.43.168:2053?type=grpc&serviceName=91.193.43.168&security=reality&fp=chrome&pbk=_fjIAqfPiUMgbGDkJxf0kz5fFDAhfNFeALrhKcG6bHo&sni=www.speedtest.net&sid=0742989b&spx=%2F#ams-grpc     " +
      "    vless://74489072-37b6-420d-b616-585ca2b3f41d@91.193.43.168:44660?type=tcp&security=reality&fp=chrome&pbk=GU9nhOctJxBTaE2spZv3rA2DC4A8vkpkijKbtFxu6HI&sni=www.google-analytics.com&flow=xtls-rprx-vision&sid=23d95be7&spx=%2F#ams-reality-ga-     " +
      "     vless://f837ead1-3c6b-45fb-a936-211b0af158c7@91.193.43.168:22990?type=tcp&security=reality&fp=chrome&pbk=ijdseLEh4ZqJVpFwvkBUeBY3OyYM4SfIAyF688r6KxQ&sni=www.googletagmanager.com&flow=xtls-rprx-vision&sid=12b1583e&spx=%2F#ams-g2-     " +
      "    vless://9b67c33d-3084-4ed0-a145-4ad78e7694d7@91.193.43.168:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=C3svVhaCRSS7KYHm5V8NUqBVdHY5YKuQMqKVr6xTIEA&sid=57de60688d7cd6f2&type=tcp&headerType=none#ams-singbox      " +
      "    vless://212008c7-bc4a-4566-9456-8599e44fd972@91.193.43.168:16789?type=tcp&security=reality&fp=chrome&pbk=bcjiDw-KDTnJzSWlP_3mFwZCkRwYQfV1NL0B9nJiWS8&sni=www.crowdsource.google.com&flow=xtls-rprx-vision&sid=053a4384&spx=%2F#ams-g3-    "
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
