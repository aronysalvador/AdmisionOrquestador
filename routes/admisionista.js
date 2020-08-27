const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getAliasSapByEmail = require("../Request/admisionista");
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

module.exports = route;
