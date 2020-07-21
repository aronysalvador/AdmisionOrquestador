const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getConfigIsAfiliado = require("../Request/isAfiliado");
const get = require("../Utils/ApiUtil/http");
const getIsapres = require("../Request/isapres");
const { response } = require("express");
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
module.exports = route;
