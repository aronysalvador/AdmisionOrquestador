const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const {getAliasSapByEmail, getEmailBySiniestro} = require("../Request/admisionista");
const get = require("../Utils/ApiUtil/http");

const route = new Router();


route.get("/getAliasSapByEmail", async (req, res) => {
  try {
    await get(getAliasSapByEmail(req.query.email)).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.send(apiResponse({}, 500, "Error"));
  }
});

route.get("/getMailBySiniestro", async (req, res) => {
  try {
    await get(getEmailBySiniestro(req.query.siniestro)).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.send(apiResponse({}, 500, "Error"));
  }
});

module.exports = route;
