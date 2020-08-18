const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const {getUpdateAdmisiones} = require("../Request/bd");
const put = require("../Utils/ApiUtil/httpPut");

const route = new Router();

route.put("/updateState", async (req, res) => {
  try {
    const {body} = req
    await put(getUpdateAdmisiones(req.query.rut),body).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.send(apiResponse({}, 500, "Error"));
  }
});
module.exports = route;
