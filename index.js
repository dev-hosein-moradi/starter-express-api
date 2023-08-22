const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/secure/hosein", (req, res) => {
  res.send(
    "    vless://fd441b5f-4ee6-45f9-bd80-fe3c4ca19b99@promo.devhosein.fun:443?type=tcp&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1%2Ch3&allowInsecure=1#swed-tls-tcp-    " +
      "    vless://03793fc9-971a-4f90-a389-d5ca26394f72@94.228.164.72:8443?type=tcp&security=reality&fp=chrome&pbk=prWsK7f7fb-LKRYVkfui5sFxGTYgJtnlW_pSjVznL30&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=7b866315&spx=%2F#swed-reality-    " +
      "    vless://e2e29142-3f57-4f59-b6ba-e202ecf7e97b@promo.devhosein.fun:2053?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1%2Ch3&allowInsecure=1#swed-tls-grpc-    " +
      "    vless://23529fee-7c9f-4df8-b29c-ea3919e0a3e4@promo.devhosein.fun:2083?type=tcp&security=reality&fp=firefox&pbk=MKzgGgsxl5T1aox33LDHM9ob37iJ0xkEuwuocKrEywA&sni=www.theverge.com&flow=xtls-rprx-vision&sid=d679a1ea&spx=%2F#swed-reality2-    "
  );
});

/* for user ===> raheleh */
app.all("/secure/somayeh", (req, res) => {
  res.send(
    "vless://03793fc9-971a-4f90-a389-d5ca26394f72@94.228.164.72:8443?type=tcp&security=reality&fp=chrome&pbk=prWsK7f7fb-LKRYVkfui5sFxGTYgJtnlW_pSjVznL30&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=7b866315&spx=%2F#swed-reality-"
  );
});

/* for user ===> radan */
app.all("/radan", (req, res) => {
  res.send(
    "vless://d5d50475-af79-47e6-ae27-feb47aba35f3@msc.devhosein.fun:443?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1#russia-46u90yze"
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
