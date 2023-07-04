const express = require("express");
const app = express();
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send(
    "vless://77e049e4-3332-4b89-a3b0-e9cdd49b4679@116.203.57.40:443/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=www.speedtest.net&fp=chrome&security=reality&pbk=F85UBIsNjt_e1kbHr4R7dwY9LgyKz5bCwLbhOB6-2zU&sid=7728e562f80da805#GE%F0%9F%87%A9%F0%9F%87%AA"
  );
});
app.listen(process.env.PORT || 3000);
