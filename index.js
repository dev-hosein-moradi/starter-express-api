const express = require("express");
const app = express();

/* for user ===> test */
app.all("/test", (req, res) => {
  const configs = [
    "vless://023a09e9-ff5a-40e5-ea68-bda7228a1d51@5.42.85.179:38321?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#hosein2|1l7Y.love@xray.com",
    "vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA",
  ];
  res.send(
    "vless://023a09e9-ff5a-40e5-ea68-bda7228a1d51@5.42.85.179:38321?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#hosein2|1l7Y.love@xray.com"
  );
});

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "  vless://023a09e9-ff5a-40e5-ea68-bda7228a1d51@5.42.85.179:38321?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#hosein2|1l7Y.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  " +
      "  vless://e98f0726-4026-4feb-dd94-082ae049188e@5.42.85.179:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#hosein|A0Gm.love@xray.com  " +
      "  vless://ce315ce3-c803-49c9-f4af-a704283c34a3@mire.devhosein.fun:45942?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#hosein3|VCEC.love@xray.com  " +
      "  vless://1e4f78d2-f3e5-4df1-9441-1a042e4d323d@5.42.85.179:31574?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#hosein4|ytNq.love@xray.com  " +
      "  vless://7301d4a4-1ae8-4134-d6b7-064ae0672cbf@5.42.85.179:52193?type=grpc&security=reality&serviceName=5.42.85.179&sni=www.speedtest.net&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&fp=chrome#hosein-grpc|u627.love@xray.com  " +
      "   vless://54d93c81-96e1-4cd6-9f8c-96629aa8ce94@sup.devhosein.fun:8443?type=tcp&security=reality&fp=chrome&pbk=FuS6viWOid63RsnZoDbEEjRh60qcsuroPpIIBX0nghU&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=9c031ce1&spx=%2F#h-sup-1-ju8f9v76   " +
      "  vless://f097c6bf-cbdf-4ae4-a766-0ff00ba56478@sup.devhosein.fun:48038?type=tcp&security=reality&fp=chrome&pbk=H6PBg02wiCuxm99qg1UosD6jpXnPZKfBjLu00CTzgBY&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=fc808d2b&spx=%2F#h-sup-2-h600l8qd  "
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "  vless://794f7279-c009-4a8a-ded6-99bd3494c644@5.42.85.179:17191?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#mohamad|PyYw.love@xray.com    " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "  vless://c45dfef7-dc36-44e8-da6c-f8a195efe479@5.42.85.179:35389?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#raheleh|PdUG.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> ghazal ios */
app.all("/ghazal", (req, res) => {
  res.send(
    "vless://7a9e8df4-e458-41b2-9667-17a0ed78be16@5.42.85.179:32544?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#ghazal|yRDV.love@xray.com"
  );
});

/* for user ===> somayeh ios */
app.all("/somayeh", (req, res) => {
  res.send(
    "vless://c1dd6552-d382-4b54-a803-e5e64e7ed3f3@5.42.85.179:43801?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#somayeh|nPdI.love@xray.com"
  );
});

/* for user ===> morti */
app.all("/morti", (req, res) => {
  res.send(
    "  vless://a382b6b4-6e88-4b17-b9c5-e0c4e8ddc1c0@5.42.85.179:34003?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#morti|2cKG.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "  vless://bb00d8c9-96a3-45f0-db09-ff3e5963bbf8@5.42.85.179:54170?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#yasna|op3N.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> khatereh */
app.all("/khatereh", (req, res) => {
  res.send(
    "  vless://de1f28b2-91ad-430d-964a-e430f0eb88ae@5.42.85.179:25131?type=tcp&security=reality&sni=www.speedtest.net&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&flow=xtls-rprx-vision&fp=chrome#khatereh|1EQd.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});
/* for user ===> amirhosein */
app.all("/amirhosein", (req, res) => {
  res.send(
    "  vless://ebd644dd-ced7-4e4d-e2fb-63802dd46bc2@5.42.85.179:17276?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#amirhosein|aDzC.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> rezashojaei */
app.all("/rezashojaei", (req, res) => {
  res.send(
    "  vless://afa6c686-3200-482d-8599-ebceb2b54e89@5.42.85.179:49574?type=tcp&security=reality&sni=www.speedtest.net&pbk=R2gKMF0Tetlnesc1pPkZH9NaOeehw-f5_U9JKG_cLjU&flow=xtls-rprx-vision&fp=chrome#rezashojaei|uWSe.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
