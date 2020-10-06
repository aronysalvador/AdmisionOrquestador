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
const autentificacion = require("./routes/autentificacion");
const documentos = require("./routes/documentos");
const datosFirma = require("./routes/datosFirma");
var cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');

const app = express();
/**
 * En esta sección se realiza la carga de las funciones middleware de express, los middleware
 * pueden custom o build-in en express añade comentario
 */


// SWAGGER DOCUMENTATION //
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// SWAGGER DOCUMENTATION //

/*app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});
 */

app.use(express.json({limit: '9mb'}));
app.use(express.urlencoded({limit: '9smb', extended: true}));
app.use(morgan("dev"));
app.use(cors());
app.use("/api/sap", sap);
app.use("/api/geo", geo);
app.use("/api/bd", bd);
app.use("/api/logs", log);
app.use("/api/paciente", paciente);
app.use("/api/admisionista", admisionista);
app.use("/api/autentificacion", autentificacion);
app.use("/api/documentos", documentos);
app.use("/api/datosFirma", datosFirma);

const port = 80;
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
