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
      "  vless://f56d05b5-8d56-4c9e-a2c6-c23eb204d7ca@95.183.8.15:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6&type=tcp&headerType=none#RUS%F0%9F%87%B7%F0%9F%87%BA  " +
      "  vless://e98f0726-4026-4feb-dd94-082ae049188e@5.42.85.179:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#hosein|A0Gm.love@xray.com  " +
      "  vless://ce315ce3-c803-49c9-f4af-a704283c34a3@5.42.85.179:45942?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#hosein3|VCEC.love@xray.com      " +
      "  vless://1e4f78d2-f3e5-4df1-9441-1a042e4d323d@5.42.85.179:31574?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#hosein4|ytNq.love@xray.com  " +
      "  vless://7301d4a4-1ae8-4134-d6b7-064ae0672cbf@5.42.85.179:52193?type=grpc&security=reality&serviceName=5.42.85.179&sni=www.speedtest.net&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&fp=chrome#hosein-grpc|u627.love@xray.com  " +
      "   vless://b7f77e02-8cf0-44e0-acda-db6222a3bfbd@sup.devhosein.fun:443?type=tcp&security=reality&fp=firefox&pbk=giipwqJILHv-0NIrEdveIGdsG3vmWet_9IsJfniZxR4&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=3315f57a&spx=%2F#hosein-sup1-rwbulyye   " +
      "  vless://d6329955-4bef-4943-b511-4f4175e998a3@sup.devhosein.fun:8443?type=tcp&security=reality&fp=firefox&pbk=LXNAoHFmB-S3r48SvygHyuC7S2wnWt4xxWMljBFLWxQ&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=d22ba81e&spx=%2F#hosein-sup2-2ouvuk29  "
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "  vless://794f7279-c009-4a8a-ded6-99bd3494c644@5.42.85.179:17191?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#mohamad|PyYw.love@xray.com    " +
      "   vless://727f481a-b95b-4ec9-8af4-7778a6671221@sup.devhosein.fun:54998?type=tcp&security=reality&fp=chrome&pbk=Aq_JvJF5YBzvMH2XMHi1fplLz7Jq5E1FDydcje8xCyg&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=e452caf0&spx=%2F#mohamad-sup-swe2-s90monbm   "
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "  vless://c45dfef7-dc36-44e8-da6c-f8a195efe479@5.42.85.179:35389?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#raheleh|PdUG.love@xray.com  " +
      "   vless://f56d05b5-8d56-4c9e-a2c6-c23eb204d7ca@95.183.8.15:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6&type=tcp&headerType=none#RUS%F0%9F%87%B7%F0%9F%87%BA   " +
      "   vless://6c17d827-7af2-44ff-9860-3b60a512f651@sup.devhosein.fun:35672?type=tcp&security=reality&fp=chrome&pbk=xAQUBQQQF-obvsaL9IFq0FR0kybiZAc6cuYX5QGQNH8&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=0f32cb83&spx=%2F#raheleh-sup-swe2-yw1lzysq   "
  );
});

/* for user ===> ghazal ios */
app.all("/ghazal", (req, res) => {
  res.send(
    "vless://7a9e8df4-e458-41b2-9667-17a0ed78be16@5.42.85.179:32544?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#ghazal|yRDV.love@xray.com   " +
      "  vless://f56d05b5-8d56-4c9e-a2c6-c23eb204d7ca@95.183.8.15:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6&type=tcp&headerType=none#RUS%F0%9F%87%B7%F0%9F%87%BA   " +
      "   vless://99d0881f-b905-4974-aa92-09d9726321e0@sup.devhosein.fun:47494?type=tcp&security=reality&fp=chrome&pbk=aVoLwpLR454EovPSDBWNi1DsfBFlu-ILze_5KyQXni4&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=dda60d90&spx=%2F#ghazal-sup-swe2-2ejyn0bd   "
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
    "  vless://a382b6b4-6e88-4b17-b9c5-e0c4e8ddc1c0@5.42.85.179:34003?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#morti|2cKG.love@xray.com  "
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "  vless://bb00d8c9-96a3-45f0-db09-ff3e5963bbf8@5.42.85.179:54170?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#yasna|op3N.love@xray.com  " +
      "   vless://1a7c939a-3085-4a7d-9e6c-6b22205af429@sup.devhosein.fun:49431?type=tcp&security=reality&fp=chrome&pbk=6mLB96wI9AiwYXwyRfFG_qIDtiG1BNFMTHdBwwueTng&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=92d09f7b&spx=%2F#yasna-sup-swe2-zmm5x79w   "
  );
});

/* for user ===> khatereh */
app.all("/khatereh", (req, res) => {
  res.send(
    "  vless://de1f28b2-91ad-430d-964a-e430f0eb88ae@5.42.85.179:25131?type=tcp&security=reality&sni=www.speedtest.net&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&flow=xtls-rprx-vision&fp=chrome#khatereh|1EQd.love@xray.com  " +
      "  vless://f56d05b5-8d56-4c9e-a2c6-c23eb204d7ca@95.183.8.15:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6&type=tcp&headerType=none#RUS%F0%9F%87%B7%F0%9F%87%BA  " +
      "   vless://bbf6959c-0291-4b5e-b664-272cf2bc1407@sup.devhosein.fun:25958?type=tcp&security=reality&fp=chrome&pbk=nqJsFZ6A-OZootgX6B9s6sB-XFbhxoudzo-NGt25Njw&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=92e3f8a1&spx=%2F#khatereh-sup-swe2-q1wnv25t   "
  );
});
/* for user ===> amirhosein */
app.all("/amirhosein", (req, res) => {
  res.send(
    "  vless://ebd644dd-ced7-4e4d-e2fb-63802dd46bc2@5.42.85.179:17276?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#amirhosein|aDzC.love@xray.com  "
  );
});

/* for user ===> rezashojaei */
app.all("/rezashojaei", (req, res) => {
  res.send(
    "  vless://afa6c686-3200-482d-8599-ebceb2b54e89@5.42.85.179:49574?type=tcp&security=reality&sni=www.speedtest.net&pbk=R2gKMF0Tetlnesc1pPkZH9NaOeehw-f5_U9JKG_cLjU&flow=xtls-rprx-vision&fp=chrome#rezashojaei|uWSe.love@xray.com  " +
      "   vless://e093d4b0-ad7e-4e4a-ab28-f021b0bd8fc4@sup.devhosein.fun:57087?type=tcp&security=reality&fp=chrome&pbk=SrYVv75hyTpRiKh3l0ziXQhsA9wyRbv0aNdbG0o06ng&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=4ba4380c&spx=%2F#rezashojaei-sup-swe2-qskvv8kc   "
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
