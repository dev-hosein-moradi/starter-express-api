const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "   vless://c7089570-39a0-4687-a2db-66ec46cc4403@5.42.74.172:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=UtL7E0Gmxj3X5JdcPAutpTRKo7K2hugkR0vwk2XroUM&flow=xtls-rprx-vision&fp=chrome#hosein-swe   " +
      "     vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk     "
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "   vless://547a8342-a16b-49c2-c53b-f4f98b9b29e2@5.42.74.172:44314?type=tcp&security=reality&sni=www.speedtest.net&pbk=cDaDzPr3PlS3NM8lreHZbdo-Mhqz8vMBzMSkHXhGIUA&flow=xtls-rprx-vision&fp=chrome#mohamad-swe   " +
      "    vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk    "
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "   vless://b7865195-93f6-4d7c-a81e-c3c1553a909e@5.42.74.172:58845?type=tcp&security=reality&sni=www.speedtest.net&pbk=S-g0oP36DShii1uPOnZDSEhp_wQghX6h68PgMivOmD4&flow=xtls-rprx-vision&fp=chrome#raheleh-swe   " +
      "    vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk    "
  );
});

/* for user ===> ghazal  */
app.all("/ghazal", (req, res) => {
  res.send(
    "   vless://4e66de00-bfe3-43ab-e43d-698a1711f32d@5.42.74.172:23960?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#ghazal-swe   " +
      "    vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk    "
  );
});

/* for user ===> somayeh ios */
app.all("/somayeh", (req, res) => {
  res.send(
    "   vless://3827334d-ce8c-4dfe-c667-7369e60ed0e2@5.42.74.172:22254?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#somayeh-swe"
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "   vless://58e5725b-0dca-49fc-b458-0d6c831590a8@5.42.74.172:30042?type=tcp&security=reality&sni=www.speedtest.net&pbk=rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w&flow=xtls-rprx-vision&fp=chrome#yasna-swe   " +
      "   vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk     "
  );
});

/* for user ===> khatereh */
app.all("/khatereh", (req, res) => {
  res.send(
    "   vless://0911edc9-80a8-4485-c916-29fe8d0adcaa@5.42.74.172:42964?type=tcp&security=reality&sni=www.speedtest.net&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&flow=xtls-rprx-vision&fp=chrome#khatereh-sup-swe2   " +
      "    vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk    "
  );
});

/* for user ===> radan */
app.all("/radan", (req, res) => {
  res.send(
    "   vless://077306e1-f250-4ccb-fd16-3626140d03c4@5.42.74.172:52455?type=tcp&security=reality&sni=www.speedtest.net&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&flow=xtls-rprx-vision&fp=chrome#radan-swe     " +
      "     vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk     "
  );
});

/* for user ===> mohsen */
app.all("/mohsen", (req, res) => {
  res.send(
    "   vless://afda19f8-f764-4c7e-a74b-c1dca39ffb9f@5.42.74.172:10627?type=tcp&security=reality&sni=www.speedtest.net&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&flow=xtls-rprx-vision&fp=chrome#mohsen-swe   " +
      "     vless://060f15fb-ccc1-49b2-ea82-755574413fa5@80.85.241.1:443?type=tcp&security=reality&sni=www.speedtest.net&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&flow=xtls-rprx-vision&fp=chrome#sup-helsk    "
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
