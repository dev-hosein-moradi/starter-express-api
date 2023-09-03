const express = require("express");
const app = express();

/* for user ===> hosein */
app.all("/secure/hosein", (req, res) => {
  res.send(
    "    vless://13aec8a7-0d0e-462d-a9fe-d37d959a4155@[2a12:5940:bd6c::2]:443?type=tcp&security=reality&fp=chrome&pbk=jIgX4Ing36bwl82iz4dbXgEExBnMQtGu1ITLWyFxbCI&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=24747170&spx=%2F#irancell-reality-1    " +
      "   vless://4bcc350c-ecee-427b-90ac-79b158a1040f@swedd.devhosein.fun:2053?type=tcp&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tcp-tls-hosein-tcp-tls    " +
      "    vless://abba430b-fbdb-4dba-8cfa-4835bab1edd6@swedd.devhosein.fun:2096?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tls-grpc-hosein-tls-grpc    " +
      "    vless://8829ea3c-6d0a-4179-bc13-8247609a5db1@[2a12:5940:bd6c::2]:2055/?type=tcp&encryption=none&flow=xtls-rprx-vision&sni=sourceforge.net&fp=chrome&security=reality&pbk=be10MvM3c10q8eu1PHVSZzvOAl3CU9G_KER02fy902g&sid=1bec0bf5#irancell-reality-2     " +
      "    tuic://af54d4ac-b270-4982-977f-8e4e1007b94b:hosein%23123@5.42.74.5:8880/?congestion_control=bbr&udp_relay_mode=native&alpn=h3%2Cspdy%2F3.1&allow_insecure=1#tuic-mci     " +
      "     tuic://af54d4ac-b270-4982-977f-8e4e1007b94b:hosein%23123@[2a12:5940:bd6c::2]:8880/?congestion_control=bbr&udp_relay_mode=native&alpn=h3%2Cspdy%2F3.1&allow_insecure=1#tuic-irancell     "
  );
});

/* for user ===> ghazal */
app.all("/secure/ghazal", (req, res) => {
  res.send(
    "    vless://299ed7c6-e4b8-4ffb-b054-5f9c9812e705@[2a12:5940:bd6c::2]:443?type=tcp&security=reality&fp=chrome&pbk=jIgX4Ing36bwl82iz4dbXgEExBnMQtGu1ITLWyFxbCI&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=24747170&spx=%2F#swed-reality-ghazal-reality-1    " +
      "   vless://676d53b8-1458-412d-ad6c-00ecdaac1ae4@swedd.devhosein.fun:2053?type=tcp&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tcp-tls-ghazal-tls-tcp    " +
      "    vless://8576bce2-fd9d-46bc-af1c-e81718aa9eeb@swedd.devhosein.fun:2096?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tls-grpc-ghazal-tls-grpc    "
  );
});

/* for user ===> raheleh */
app.all("/secure/raheleh", (req, res) => {
  res.send(
    "    vless://a225b38c-092c-4e71-b865-41ec30f07f5f@[2a12:5940:bd6c::2]:443?type=tcp&security=reality&fp=chrome&pbk=jIgX4Ing36bwl82iz4dbXgEExBnMQtGu1ITLWyFxbCI&sni=www.speedtest.net&flow=xtls-rprx-vision&sid=24747170&spx=%2F#swed-reality-raheleh-reality-1    " +
      "   vless://31f2baa1-80cf-436e-8ed6-f30fcbeaf029@swedd.devhosein.fun:2053?type=tcp&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tcp-tls-raheleh-tls-tcp    " +
      "    vless://b7a88062-6df5-41e0-bfff-d789c4ddfe23@swedd.devhosein.fun:2096?type=grpc&serviceName=&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1#swedd-tls-grpc-raheleh-tls-grpc    "
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on: ${process.env.PORT || 3000}`);
});
