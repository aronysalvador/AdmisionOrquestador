const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getCodigos = require("../Request/codigos");
const getDocumentos = require("../Request/documentos");
const get = require("../Utils/ApiUtil/http");

const route = new Router();


route.get("/", async (req, res) => {
  try {

    var codigos= [];
    var documentos= [];
    await get(getCodigos(req.query.rut)).then((data) => {

     codigos = data.data.map(cod => {
        return cod.codigo;
        });

    });

    codigos.map(async(codigos) => {await get(getDocumentos(codigos)).then((data) =>{
        // console.log(data)
        documentos.push(data)

    })})

    res.send(documentos);

  } catch (error) {
      console.log(error)
    res.send(apiResponse({}, 500, "Error"));
  }
});

module.exports = route;
