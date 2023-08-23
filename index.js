const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/secure/hosein", (req, res) => {
  res.send(
    "    vless://13aec8a7-0d0e-462d-a9fe-d37d959a4155@promo.devhosein.fun:443?type=tcp&security=reality&fp=firefox&pbk=jIgX4Ing36bwl82iz4dbXgEExBnMQtGu1ITLWyFxbCI&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=24747170&spx=%2F#swed-reality-    " +
      "   vless://4bcc350c-ecee-427b-90ac-79b158a1040f@swedd.devhosein.fun:2053?type=tcp&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tcp-tls-1xeg6h5p    " +
      "    vless://abba430b-fbdb-4dba-8cfa-4835bab1edd6@swedd.devhosein.fun:2096?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tls-grpc-    " +
      "    vless://09a4fc6d-d0cd-4f8f-969c-f09fa3b3f5ae@swedd.devhosein.fun:8443?type=ws&path=%2F&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tls-ws-    "
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
