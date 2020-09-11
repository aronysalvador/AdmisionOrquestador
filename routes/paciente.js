const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const {getConfigValidate, getConfigGetPaciente, getPacienteValido} = require("../Request/paciente");
const get = require("../Utils/ApiUtil/http");

const route = new Router();


route.get("/getPaciente", async (req, res) => {
  try {
    const usuarioValido = await get(getPacienteValido(req.query.rut));
    if(usuarioValido.content[0]){
      await get(getConfigGetPaciente(req.query.rut)).then((data) => {
        res.send(data);
      });
    }else{
      throw "No tiene BP "
    }
    
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
