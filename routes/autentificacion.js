const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const post = require("../Utils/ApiUtil/httpPost");
const autentificacion = require("../Request/autentificacion");

const route = new Router();

/**
 * Recibe toda la data de la admisión y se comunica con los sevicios
 * que insertan la data en SAP
 */
route.post("/", async (req, res) => {
  try {
    const result = await post(autentificacion(),req.body);
    res.send(result);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

module.exports = route;
