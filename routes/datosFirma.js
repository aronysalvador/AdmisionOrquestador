const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const get = require("../Utils/ApiUtil/http");
const getEmailTelefono = require("../Request/emailTelefono");

const route = new Router();

/**
 * Recibe toda la data de la admisión y se comunica con los sevicios
 * que insertan la data en SAP
 */
route.get("/", async (req, res) => {
  try {
    const {rut} = req.query
    const result = await get(getEmailTelefono(rut));
    res.send(result);
  } catch (error) {
    res.send(apiResponse([], 500, "Error"));
  }
});

module.exports = route;