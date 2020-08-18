const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getConfigIsAfiliado = require("../Request/isAfiliado");
const get = require("../Utils/ApiUtil/http");
const getIsapres = require("../Request/isapres");
const getAfp = require("../Request/afp");
const getComunas = require("../Request/comunas");
const getRegiones = require("../Request/regiones");
const getOcupaciones = require("../Request/ocupaciones");
const getTipoContrato = require("../Request/tipoContrato");
const getTipoRemuneracion = require("../Request/tipoRemuneracion");
const getJornadaTrabajo = require("../Request/jornadaTrabajo");
const getCategoriaOcupacional = require("../Request/categoriaOcupacional");
const getSucursales = require("../Request/sucursales");
const getRazonSocial = require("../Request/razonSocial");
const getProfesiones = require("../Request/profesiones");
const getAlertas = require("../Request/alertas");

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
 * Recibe la lista de afp desde sap
 */
route.get("/afp", async (req, res) => {
  try {
    const result = await get(getAfp());
    res.send(result);
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
    res.send(result);
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
    res.send(result);
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
    res.send(result);
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

route.get("/sucursales", async (req, res) => {
  try {
    const response = await get(getSucursales(req.query.rutEmpresa));
    return res.send(response);
  } catch (error) {
    console.log(error)
    res.send(apiResponse([], 500, "Error"));
  }
});

route.get("/razonSocialByName", async (req, res) => {
  try {
    const response = await get(getRazonSocial(req.query.companyName));
    return res.send(response);
  } catch (error) {
    console.log(error);
    res.send(apiResponse([], 500, "Error"));
  }
});

/**
 * Recibe la lista de Profesiones desde sap
 */
route.get("/profesiones", async (req, res) => {
  try {
    const result = await get(getProfesiones());
    res.send(result);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

/**
 * Recibe la lista de Alertas desde sap
 */
route.get("/alertas", async (req, res) => {
  try {
    const result = await get(getAlertas());
    res.send(result);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

module.exports = route;
