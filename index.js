const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "   vless://a6cbd9e1-ebc5-42c1-a173-3f450cb93268@5.42.74.172:5423?type=tcp&security=reality&sni=www.speedtest.net&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&flow=xtls-rprx-vision&fp=chrome#hosein-sup-swe2   " +
      "  vless://924ec820-fd34-4578-8f64-bcd4017c1cfd@5.42.74.172:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#hosein2-sup-swe2  " +
      "   vless://fd75a5f3-7524-4fc9-a0f5-7a98049031d4@5.42.74.172:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=Xx7HyT5wE7716x-UMPNRgh4Gea5WEETeIdC_400uqFo&sid=f0664a9846f0f983&type=tcp&headerType=none#singbox-swed2    "
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "   vless://5747de69-af3a-4be8-d9e9-4aaa11620a52@5.42.74.172:27199?type=tcp&security=reality&sni=www.speedtest.net&pbk=rYH4wPTVzSwtpXgI3U7YxppIP6oudD-425vT7pyhj1w&flow=xtls-rprx-vision&fp=chrome#mohamad-sup-swe2   "
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "   vless://851c0e18-dcc5-4967-85ce-b07df704e13e@5.42.74.172:31641?type=tcp&security=reality&sni=www.speedtest.net&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&flow=xtls-rprx-vision&fp=chrome#raheleh-sup-swe2   "
  );
});

/* for user ===> ghazal  */
app.all("/ghazal", (req, res) => {
  res.send(
    "   vless://f079b90f-bf74-444e-c691-094b6019501f@5.42.74.172:11120?type=tcp&security=reality&sni=www.speedtest.net&pbk=4comh-7Jm_wZXJQ5QiLSCbVGQIbMUzHUIBdb0aFtLzM&flow=xtls-rprx-vision&fp=chrome#ghazal-sup-swe2   "
  );
});

/* for user ===> somayeh ios */
app.all("/somayeh", (req, res) => {
  res.send(
    "      vless://fd75a5f3-7524-4fc9-a0f5-7a98049031d4@5.42.74.172:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=Xx7HyT5wE7716x-UMPNRgh4Gea5WEETeIdC_400uqFo&sid=f0664a9846f0f983&type=tcp&headerType=none#singbox-swed2       " +
      "    vless://924ec820-fd34-4578-8f64-bcd4017c1cfd@5.42.74.172:8443?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#hosein2-sup-swe2    "
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "   vless://61143991-ff75-407d-c715-f30ca1e33b5b@5.42.74.172:43450?type=tcp&security=reality&sni=www.speedtest.net&pbk=UtL7E0Gmxj3X5JdcPAutpTRKo7K2hugkR0vwk2XroUM&flow=xtls-rprx-vision&fp=chrome#yasna-sup-swe2   "
  );
});

/* for user ===> khatereh */
app.all("/khatereh", (req, res) => {
  res.send(
    "   vless://0911edc9-80a8-4485-c916-29fe8d0adcaa@5.42.74.172:42964?type=tcp&security=reality&sni=www.speedtest.net&pbk=rwpbqas_HY8knlW0fFSIeUrjgBXHBzSNboflsLD8elA&flow=xtls-rprx-vision&fp=chrome#khatereh-sup-swe2   "
  );
});
/* for user ===> radan */
app.all("/radan", (req, res) => {
  res.send(
    "   vless://1a76601b-2d83-4539-e9ea-68c3a557a925@5.42.74.172:50268?type=tcp&security=reality&sni=www.speedtest.net&pbk=R2gKMF0Tetlnesc1pPkZH9NaOeehw-f5_U9JKG_cLjU&flow=xtls-rprx-vision&fp=chrome#radan-sup-swe2     "
  );
});

/* for user ===> mohsen */
app.all("/mohsen", (req, res) => {
  res.send(
    "   vless://ac4b5f26-9046-448a-e17c-17526cf019db@5.42.74.172:59048?type=tcp&security=reality&sni=www.speedtest.net&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&flow=xtls-rprx-vision&fp=chrome#mohsen-sup-swe2   "
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
