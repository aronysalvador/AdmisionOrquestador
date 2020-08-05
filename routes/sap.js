const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getConfigIsAfiliado = require("../Request/isAfiliado");
const get = require("../Utils/ApiUtil/http");
const getIsapres = require("../Request/isapres");
const getCargos = require("../Request/cargos");
const getAfp = require("../Request/afp");
const getComunas = require("../Request/comunas");
const getRegiones = require("../Request/regiones");
const getOcupaciones = require("../Request/ocupaciones");
const getTipoContrato = require("../Request/tipoContrato");
const getTipoRemuneracion = require("../Request/tipoRemuneracion");
const getJornadaTrabajo = require("../Request/jornadaTrabajo");
const getCategoriaOcupacional = require("../Request/categoriaOcupacional");



const route = new Router();

/**
 *  Indica si el trabajador esta afiliado a la ACHS
 *  Se considera afiliados a los trabajadores que poseen cotizaciones 2 meses anteriores al periodo actual
 */
route.get("/isAfiliado", async (req, res) => {
  try {
    await get(getConfigIsAfiliado(req.query.rut)).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.send(apiResponse({}, 500, "Error"));
  }
});

/*
 * Recibe la lista de isapres desde SAP
 */
route.get("/isapres", async (req, res) => {
  try {
    const result = await get(getIsapres());
    res.send(result);
  } catch (error) {
    res.send(apiResponse({}, 500, "Error"));
  }
});

/**
 * Recibe la lista de cargos desde sap
 */
route.get("/cargos", async (req, res) => {
  try {
    const result = await get(getCargos());
    const response = apiResponse(result, res.status, "Operación Exitosa");
    res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

/**
 * Recibe la lista de afp desde sap
 */
route.get("/afp", async (req, res) => {
  try {
    const result = await get(getAfp());
    const response = apiResponse(result, res.status, "Operación Exitosa");
    res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

/**
 * Recibe la lista de comunas desde sap
 */
route.get("/comunas", async (req, res) => {
  try {
    const result = await get(getComunas());
    const response = apiResponse(result, res.status, "Operación Exitosa");
    res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

/**
 * Recibe la lista de regiones desde sap
 */
route.get("/regiones", async (req, res) => {
  try {
    const result = await get(getRegiones());
    const response = apiResponse(result, res.status, "Operación Exitosa");
    res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

/**
 * Recibe la lista de ocupaciones desde sap
 */
route.get("/ocupaciones", async (req, res) => {
  try {
    const result = await get(getOcupaciones());
    const response = apiResponse(result, res.status, "Operación Exitosa");
    res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});


route.get("/tipoContrato", async (req, res) => {
  try {
    const response = await get(getTipoContrato());
    return res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

route.get("/tipoRemuneracion", async (req, res) => {
  try {
    const response = await get(getTipoRemuneracion());
    return res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

route.get("/jornadaTrabajo", async (req, res) => {
  try {
    const response = await get(getJornadaTrabajo());
    return res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

route.get("/categoriaOcupacional", async (req, res) => {
  try {
    const response = await get(getCategoriaOcupacional());
    return res.send(response);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});
module.exports = route;
