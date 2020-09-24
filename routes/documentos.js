const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getCodigos = require("../Request/codigos");
const getDocumentos = require("../Request/documentos");
const get = require("../Utils/ApiUtil/http");
const apiObjectResponse = require("../Utils/ApiUtil/apiResponseObjectReducer");
const route = new Router();


route.get("/", async (req, res) => {
  try {

    var documentos= [];
    await get(getCodigos(req.query.rut)).then(async (data) => {

    await Promise.all(data.data.map(async ({codigo}) => {
      await get(getDocumentos(codigo)).then((result) => {
        result.Resultado.documentosMatriz.map((documento) => {
          documentos.push(documento)
        });
      });
    }))

    });

    res.send(apiObjectResponse(documentos, 200, "Envio de documentos"));

  } catch (error) {
      console.log(error)
    res.send(apiResponse({}, 500, "Error"));
  }
});

module.exports = route;
