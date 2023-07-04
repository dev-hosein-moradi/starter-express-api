const express = require("express");
const app = express();

const configs = [
  //nurem
  "vless://77e049e4-3332-4b89-a3b0-e9cdd49b4679@116.203.57.40:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=F85UBIsNjt_e1kbHr4R7dwY9LgyKz5bCwLbhOB6-2zU&sid=7728e562f80da805#GE%F0%9F%87%A9%F0%9F%87%AA",
  //rus
  "vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA",
  //swe
  "vless://4174e684-4ecd-431a-fc59-bcb4c3e10b0d@5.42.85.179:8443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.google-analytics.com&fp=chrome&security=reality&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&sid=#swe%F0%9F%87%B8%F0%9F%87%AA",
  //nl
  "vless://9c5350e4-7eb5-49a7-8db5-7519dc0bd995@194.87.31.249:8443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=bE9rSX4zIWnF3lDy-DvyjD60dA6CJZJ15LR_njSuAQE&sid=8dfbedee1d564c58&type=tcp&headerType=none#NL",
  //de
  "",
];
/* for user ===> hosein */
app.all("/hosein", (req, res) => {
  res.send(
    "  vless://8d6be7b5-8fee-4b03-dfe9-196b1d701500@5.42.85.179:10733?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=UtL7E0Gmxj3X5JdcPAutpTRKo7K2hugkR0vwk2XroUM&type=tcp&headerType=none#swe2  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  " +
      "  vless://4174e684-4ecd-431a-fc59-bcb4c3e10b0d@5.42.85.179:8443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.google-analytics.com&fp=chrome&security=reality&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&sid=#swe%F0%9F%87%B8%F0%9F%87%AA  "
  );
});

/* for user ===> mohamad */
app.all("/mohamad", (req, res) => {
  res.send(
    "  vless://186ac7e2-33b8-443f-f285-614b5da63671@5.42.85.179:55001?type=tcp&security=reality&sni=www.speedtest.net&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&flow=xtls-rprx-vision&fp=chrome#swe-mohamad|yvUE.love@xray.com    " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> raheleh */
app.all("/raheleh", (req, res) => {
  res.send(
    "  vless://521190a9-2fff-4d09-e4eb-868f16b1ba52@5.42.85.179:40433?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#swe-raheleh|fIsF.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> ghazal */
app.all("/ghazal", (req, res) => {
  res.send(
    "  vless://4ad1bdee-55ce-4521-b6fb-abeea2dd5c8f@5.42.85.179:48772?type=tcp&security=reality&sni=www.speedtest.net&pbk=g-oxbqigzCaXqARxuyD2_vbTYeMD9zn8wnTo02S69QM&flow=xtls-rprx-vision&fp=chrome#swe-ghazal|KUpo.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> morti */
app.all("/morti", (req, res) => {
  res.send(
    "  vless://e4b136cb-2b23-4754-89a6-d82e57b16284@5.42.85.179:43308?type=tcp&security=reality&sni=www.speedtest.net&pbk=9rx7JwMO-KRZZEM9TQBO19BOAmmGjJyjN86ll2J7uVc&flow=xtls-rprx-vision&fp=chrome#swe-morti|uDao.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> yasna */
app.all("/yasna", (req, res) => {
  res.send(
    "  vless://b2c4f16d-c560-464f-fd04-472345d9bf08@5.42.85.179:21220?type=tcp&security=reality&sni=www.speedtest.net&pbk=IiuIighvDsor2v-vb5s3IJbNiqwLw568auiqoXxc7FM&flow=xtls-rprx-vision&fp=chrome#swe-yasna|Mgbp.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});

/* for user ===> khatereh */
app.all("/khatereh", (req, res) => {
  res.send(
    "  vless://0401065e-dcb7-430f-ad2d-430e083961e8@5.42.85.179:35092?type=tcp&security=reality&sni=www.speedtest.net&pbk=IiuIighvDsor2v-vb5s3IJbNiqwLw568auiqoXxc7FM&flow=xtls-rprx-vision&fp=chrome#swe-khatereh|g0iB.love@xray.com  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  "
  );
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
