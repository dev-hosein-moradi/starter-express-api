const express = require("express");
const app = express();

const configs = [
  "vless://77e049e4-3332-4b89-a3b0-e9cdd49b4679@116.203.57.40:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=F85UBIsNjt_e1kbHr4R7dwY9LgyKz5bCwLbhOB6-2zU&sid=7728e562f80da805#GE%F0%9F%87%A9%F0%9F%87%AA",
  "vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA",
  "vless://4174e684-4ecd-431a-fc59-bcb4c3e10b0d@5.42.85.179:8443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.google-analytics.com&fp=chrome&security=reality&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&sid=#swe%F0%9F%87%B8%F0%9F%87%AA",
  "vless://9c5350e4-7eb5-49a7-8db5-7519dc0bd995@194.87.31.249:8443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=chrome&pbk=bE9rSX4zIWnF3lDy-DvyjD60dA6CJZJ15LR_njSuAQE&sid=8dfbedee1d564c58&type=tcp&headerType=none#NL",
];
app.all("/", (req, res) => {
  res.send(
    "  vless://77e049e4-3332-4b89-a3b0-e9cdd49b4679@116.203.57.40:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=F85UBIsNjt_e1kbHr4R7dwY9LgyKz5bCwLbhOB6-2zU&sid=7728e562f80da805#GE%F0%9F%87%A9%F0%9F%87%AA  " +
      "  vless://3905b2dd-683a-46d4-b4f9-ead78e11c443@95.183.8.15:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=BdMKBI9_uTPV7k4t5cATKqE2RUPkHRoVnpXHPmXmEGo&sid=040e69e83ca040a6#RUS%F0%9F%87%B7%F0%9F%87%BA  " +
      "  vless://4174e684-4ecd-431a-fc59-bcb4c3e10b0d@5.42.85.179:8443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.google-analytics.com&fp=chrome&security=reality&pbk=qhTzYYIgBzDLNYR79oxftqdo1kzL-1_hGJKfqrOliCY&sid=#swe%F0%9F%87%B8%F0%9F%87%AA  "
  );
});
app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
