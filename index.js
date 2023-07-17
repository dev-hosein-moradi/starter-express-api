const express = require("express");
const app = express();

/* for user ===> test */
app.all("/test", (req, res) => {
  const configs = [
    "vless://023a09e9-ff5a-40e5-ea68-bda7228a1d51@5.42.85.179:38321?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#hosein2|1l7Y.love@xray.com",
    "vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA",
  ];
  res.send(configs);
});

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "  vless://023a09e9-ff5a-40e5-ea68-bda7228a1d51@5.42.85.179:38321?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#hosein2|1l7Y.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  " +
      "  vless://e98f0726-4026-4feb-dd94-082ae049188e@5.42.85.179:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#hosein|A0Gm.love@xray.com  " +
      "  vless://ce315ce3-c803-49c9-f4af-a704283c34a3@5.42.85.179:45942?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#hosein3|VCEC.love@xray.com  " +
      "  vless://1e4f78d2-f3e5-4df1-9441-1a042e4d323d@5.42.85.179:31574?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#hosein4|ytNq.love@xray.com  "
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

/* for user ===> ghazal */
app.all("/ghazal", (req, res) => {
  res.send(
    "  vless://7a9e8df4-e458-41b2-9667-17a0ed78be16@5.42.85.179:32544?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#ghazal|yRDV.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
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
/* for user ===> mr radan palayeshgah 09137965519 */
app.all("/radan", (req, res) => {
  res.send(
    "  vless://18675588-16a2-4269-ece4-05365dcaa185@5.42.85.179:36081?type=tcp&security=reality&sni=www.speedtest.net%3A443&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#radan|GlRo.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
