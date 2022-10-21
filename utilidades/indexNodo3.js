const Consul = require("consul");
const express = require("express");
const path = require("path");

const SERVICE_NAME = "serverM1";
const SERVICE_ID = "m" + process.argv[2];
const SCHEME = "http";
const HOST = "192.168.100.6";
const PORT = process.argv[2] * 1;
const PID = process.pid;

/* Inicializacion del server */
const app = express();
const consul = new Consul();

app.get("/health", function (req, res) {
  console.log("Health check!");
  res.end("Ok.");
});

app.get("/", (req, res) => {
  console.log("GET /", Date.now());

  /*res.json({
    data: Math.floor(Math.random() * 89999999 + 10000000),
    data_pid: PID,
    data_service: SERVICE_ID,
    data_host: HOST
  });*/
  //res.send(`Instancia desde el server ${HOST} en el puerto ${PORT}`);

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
        <title>Web app</title>
  </head>
  <body
    style="width: 100vw; height: 100vh;"
    class="has-background-grey-lighter"
  >
  <div
  class="container"
  style="
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  "
>
  <h1
    class="has-text-grey-darker"
    style="
      margin-bottom: 30px;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: bold;
    "
  >
    Bienvenidos a MyWebApp
  </h1>
  <div
    class="card has-background-info has-text-white-ter"
    style="height: 400px; width: 800px;"
  >
    <div class="card-content has-text-white-ter">
      <div class="media" style="display: flex; align-items: center;">
        <div class="media-left">
        <figure class="image is-96x96">
        <img
          src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg"
          alt="Perfil"
        />
      </figure>
    </div>
    <div class="media-content has-text-white-ter">
      <p class="title is-2 has-text-white-ter">Steven Lucano</p>
      <p class="subtitle is-5">
        <a
          class="has-text-white-ter"
          href="https://github.com/stevenLucano"
          target="_blank"
          >@stevenLucano</a
        >
      </p>
    </div>
  </div>
</div>
<div class="content p-5" style="font-size: 20px;">
  ¡Este es el primer microproyecto de <b>Computación en la nube</b>!.
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
  inventore nisi, ex officiis, neque id quidem fugit vero numquam animi
  voluptatem veniam natus praesentium fugiat tenetur qui? Ducimus, porro
  quisquam! <a class="has-text-white-ter"><b>@bulmaio</b></a
  >.
  <a href="#" class="has-text-white-ter">#css</a>
  <a href="#" class="has-text-white-ter">#responsive</a>
  <br />
  <time datetime="2016-1-1">18 Oct 2022</time>
</div>
</div>
</div>
<div style="position: fixed; bottom: 0; right: 0; margin: 0 10px 10px 0;">
<span class="tag is-link is-medium">
<b>Server</b>&nbsp;
<span id="domain">${HOST}</span>
:
<span id="port">${PORT}</span></span
>
</div>
</body>
</html>
  `);
  //res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(PORT, function () {
  console.log(
    "Servicio iniciado en:" + SCHEME + "://" + HOST + ":" + PORT + "!"
  );
});

/* Registro del servicio */
var check = {
  id: SERVICE_ID,
  name: SERVICE_NAME,
  address: HOST,
  port: PORT,
  check: {
    http: SCHEME + "://" + HOST + ":" + PORT + "/health",
    ttl: "5s",
    interval: "5s",
    timeout: "5s",
    deregistercriticalserviceafter: "1m",
  },
};

consul.agent.service.register(check, function (err) {
  if (err) throw err;
});
