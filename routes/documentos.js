const Router = require("express-promise-router");
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const getCodigos = require("../Request/codigos");
const {getDocumentos, saveDocuments, getDocumentosbyAdmisionista, getDocumentobyCode, updateEstadoDocumento } = require("../Request/documentos");
const get = require("../Utils/ApiUtil/http");
const apiObjectResponse = require("../Utils/ApiUtil/apiResponseObjectReducer");
const firmarDocumentos = require("../Request/firmarDocumentos");
const post = require("../Utils/ApiUtil/httpPost");
const guardaDocSAP = require("../Request/guardaDocSAP");
const route = new Router();

//Metodo utilizado por la api antigua de firma digital, para pruebas de egreso
route.get("/MostrarDocumento", async (req, res) => {
  try {
    const {codigoGenerado} = req.query
    const result = await get(getDocumentos(codigoGenerado))
    res.send(result);
    
  } catch (error) {
    res.send(apiResponse([], 500,error));
  }
});

route.post("/FirmarDocumentos", async (req, res) => {
  try{
    const result = await post(firmarDocumentos(), req.body);
    res.send(result);
  }catch(error){
    res.send(apiResponse([], 500, error));
  }
});

route.post("/GuardarEnSAP",async (req, res) => {
  try{
    const result = await post(guardaDocSAP(), req.body);
    res.send(result);
  }catch(error){
    res.send(apiResponse([], 500, error));
  }
});

route.post("/insert",async (req, res) => {
  try{
    const result = await post(saveDocuments(), req.body);
    res.send(result);
  }catch(error){
    res.send(apiResponse([], 500, error));
  }
});

route.get("/documentosAdmisionista", async (req, res) => {
  try {
    const {correo} = req.query
    const result = await get(getDocumentosbyAdmisionista(correo))
    res.send(result);
    
  } catch (error) {
    res.send(apiResponse([], 500,error));
  }
});

route.get("/infoDocumento", async (req, res) => {
  try {
    const {codigo} = req.query
    const result = await get(getDocumentobyCode(codigo))
    res.send(result);
    
  } catch (error) {
    res.send(apiResponse([], 500,error));
  }
});

route.get("//updateEstado", async (req, res) => {
  try {
    const result = await get(updateEstadoDocumento(req.query))
    res.send(result);
    
  } catch (error) {
    res.send(apiResponse([], 500,error));
  }
});


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
