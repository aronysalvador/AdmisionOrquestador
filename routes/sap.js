const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getConfigIsAfiliado = require("../Request/isAfiliado");
const get = require("../Utils/ApiUtil/http");
const getIsapres = require("../Request/isapres");
const { response } = require("express");
const getCargos = require("../Request/cargos");
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
