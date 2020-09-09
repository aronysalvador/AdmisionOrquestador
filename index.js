/**
 * Carga del SDK Azure Application Insights para NodeJS, por seguridad la instrumentation key
 * debe estar guardada en una variable de entorno en el servidor
 */
// const appInsights = require("applicationinsights");
// appInsights.setup("your_instrmentation_key").start();
require("custom-env").env(true);
const express = require("express");
const morgan = require("morgan");
const sap = require("./routes/sap");
const geo = require("./routes/geolocalizacion");
const bd = require("./routes/bd");
const log = require("./routes/logs");
const paciente = require("./routes/paciente");
const admisionista = require("./routes/admisionista");
var cors = require("cors");

const app = express();
/**
 * En esta sección se realiza la carga de las funciones middleware de express, los middleware
 * pueden custom o build-in en express añade comentario
 */
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/sap", sap);
app.use("/api/geo", geo);
app.use("/api/bd", bd);
app.use("/api/logs", log);
app.use("/api/paciente", paciente);
app.use("/api/admisionista", admisionista);

const port = 80;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
