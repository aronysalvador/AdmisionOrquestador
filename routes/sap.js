const Router = require('express-promise-router')
const apiResponse = require('../Utils/ApiUtil/apiResponseReducer')
const getConfigIsAfiliado = require('../Request/isAfiliado')
const get = require('../Utils/ApiUtil/http')
const route = new Router();

/**
 *  Indica si el trabajador esta afiliado a la ACHS
 *  Se considera afiliados a los trabajadores que poseen cotizaciones 2 meses anteriores al periodo actual
 */
route.get('/isAfiliado', async (req, res) => {
    try {
        json = ""
        await get(getConfigIsAfiliado(req.query.rut)).then(data =>{
            json = data
        })
        const response = apiResponse(json, res.statusCode, "Operacion exitosa")
        res.send(response)
    } catch (error) {
        res.send(apiResponse({}, 500,"Error"))
    }
})
module.exports = route;