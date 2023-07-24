const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "  vless://023a09e9-ff5a-40e5-ea68-bda7228a1d51@5.42.85.179:38321?type=tcp&security=reality&sni=www.google-analytics.com&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#hosein2|1l7Y.love@xray.com  " +
      "  vless://f56d05b5-8d56-4c9e-a2c6-c23eb204d7ca@95.183.8.15:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6&type=tcp&headerType=none#RUS%F0%9F%87%B7%F0%9F%87%BA  " +
      "  vless://e98f0726-4026-4feb-dd94-082ae049188e@5.42.85.179:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#hosein|A0Gm.love@xray.com  " +
      "  vless://ce315ce3-c803-49c9-f4af-a704283c34a3@5.42.85.179:443?type=tcp&security=reality&sni=www.googletagmanager.com&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#hosein3|VCEC.love@xray.com      " +
      "  vless://1e4f78d2-f3e5-4df1-9441-1a042e4d323d@5.42.85.179:31574?type=tcp&security=reality&sni=www.microsoft.com&pbk=IiuIighvDsor2v-vb5s3IJbNiqwLw568auiqoXxc7FM&flow=xtls-rprx-vision&fp=chrome#hosein4|ytNq.love@xray.com  " +
      "  vless://7301d4a4-1ae8-4134-d6b7-064ae0672cbf@5.42.85.179:52193?type=grpc&security=reality&serviceName=5.42.85.179&sni=www.speedtest.net&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&fp=chrome#hosein-grpc|u627.love@xray.com  " +
      "   vless://a6cbd9e1-ebc5-42c1-a173-3f450cb93268@5.42.74.172:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&flow=xtls-rprx-vision&fp=chrome#hosein-sup-swe2   " +
      "  vless://924ec820-fd34-4578-8f64-bcd4017c1cfd@5.42.74.172:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#hosein2-sup-swe2  "
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "  vless://794f7279-c009-4a8a-ded6-99bd3494c644@5.42.85.179:17191?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#mohamad|PyYw.love@xray.com    " +
      "   vless://5747de69-af3a-4be8-d9e9-4aaa11620a52@5.42.74.172:27199?type=tcp&security=reality&sni=www.speedtest.net&pbk=rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w&flow=xtls-rprx-vision&fp=chrome#mohamad-sup-swe2   "
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "  vless://c45dfef7-dc36-44e8-da6c-f8a195efe479@5.42.85.179:35389?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#raheleh|PdUG.love@xray.com  " +
      "   vless://851c0e18-dcc5-4967-85ce-b07df704e13e@5.42.74.172:31641?type=tcp&security=reality&sni=www.speedtest.net&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&flow=xtls-rprx-vision&fp=chrome#raheleh-sup-swe2   "
  );
});

/* for user ===> ghazal ios */
app.all("/ghazal", (req, res) => {
  res.send(
    "vless://7a9e8df4-e458-41b2-9667-17a0ed78be16@5.42.85.179:32544?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#ghazal|yRDV.love@xray.com   " +
      "   vless://f079b90f-bf74-444e-c691-094b6019501f@5.42.74.172:11120?type=tcp&security=reality&sni=www.speedtest.net&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&flow=xtls-rprx-vision&fp=chrome#ghazal-sup-swe2   "
  );
});

/* for user ===> somayeh ios */
app.all("/somayeh", (req, res) => {
  res.send(
    "vless://c1dd6552-d382-4b54-a803-e5e64e7ed3f3@5.42.85.179:43801?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#somayeh|nPdI.love@xray.com"
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "  vless://bb00d8c9-96a3-45f0-db09-ff3e5963bbf8@5.42.85.179:54170?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#yasna|op3N.love@xray.com  " +
      "   vless://61143991-ff75-407d-c715-f30ca1e33b5b@5.42.74.172:43450?type=tcp&security=reality&sni=www.speedtest.net&pbk=UtL7E0Gmxj3X5JdcPAutpTRKo7K2hugkR0vwk2XroUM&flow=xtls-rprx-vision&fp=chrome#yasna-sup-swe2   "
  );
});

/* for user ===> khatereh */
app.all("/khatereh", (req, res) => {
  res.send(
    "  vless://de1f28b2-91ad-430d-964a-e430f0eb88ae@5.42.85.179:25131?type=tcp&security=reality&sni=www.speedtest.net&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&flow=xtls-rprx-vision&fp=chrome#khatereh|1EQd.love@xray.com  " +
      "   vless://0911edc9-80a8-4485-c916-29fe8d0adcaa@5.42.74.172:42964?type=tcp&security=reality&sni=www.speedtest.net&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&flow=xtls-rprx-vision&fp=chrome#khatereh-sup-swe2   "
  );
});
/* for user ===> amirhosein */
app.all("/amirhosein", (req, res) => {
  res.send(
    "  vless://ebd644dd-ced7-4e4d-e2fb-63802dd46bc2@5.42.85.179:17276?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#amirhosein|aDzC.love@xray.com  "
  );
});

/* for user ===> mohsen */
app.all("/mohsen", (req, res) => {
  res.send(
    "   vless://ac4b5f26-9046-448a-e17c-17526cf019db@5.42.74.172:59048?type=tcp&security=reality&sni=www.speedtest.net&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&flow=xtls-rprx-vision&fp=chrome#mohsen-sup-swe2   " +
      "    vless://afa6c686-3200-482d-8599-ebceb2b54e89@5.42.85.179:49574?type=tcp&security=reality&sni=www.speedtest.net&pbk=R2gKMF0Tetlnesc1pPkZH9NaOeehw-f5_U9JKG_cLjU&flow=xtls-rprx-vision&fp=chrome#mohsen|uWSe.love@xray.com    "
  );
});

/* for user ===> ms eslami 09177247261 */
app.all("/eslami", (req, res) => {
  res.send(
    "  vless://7607f875-583b-4d11-9f2d-b350b7b29d6f@5.42.85.179:37052?type=tcp&security=reality&sni=www.speedtest.net&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&flow=xtls-rprx-vision&fp=chrome#eslami|YdBw.love@xray.com  "
  );
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
