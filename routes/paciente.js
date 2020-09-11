const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const {getConfigValidate, getConfigGetPaciente, getPacienteValido} = require("../Request/paciente");
const get = require("../Utils/ApiUtil/http");

const route = new Router();


route.get("/getPaciente", async (req, res) => {
  try {

    //data.content.response.BpCreado = await get(getPacienteValido(req.query.rut.toUpperCase()));
    let rutFormateado = req.query.rut.replace(/\./g,'').toUpperCase();
    const  valorBP = await get(getPacienteValido(rutFormateado));
    await get(getConfigGetPaciente(rutFormateado)).then((data) => {
      data.content.response.BpCreado = valorBP.content[0];
      res.send(data);
    });
   
  } catch (error) {
    res.send(apiResponse({}, 500, "Error"));
  }
});

route.get("/validate", async (req, res) => {
    try {
        const {rutEmpresa, BpSucursal, rutPaciente} = req.query
      await get(getConfigValidate(rutEmpresa, BpSucursal, rutPaciente)).then((data) => {
        res.send(data);
      });
    } catch (error) {
      res.send(apiResponse({}, 500, "Error"));
    }
  });

module.exports = route;
