const Router = require('express-promise-router')
const apiResponse = require('../Utils/ApiUtil/apiResponseReducer')
const {getStaticMapa,autocompletarDirecciones,getLatLng,getDireccion} = require('../Request/geolocalizacion')
const get = require('../Utils/ApiUtil/http')
const getStream = require('../Utils/ApiUtil/httpGetStream')
const route = new Router();

route.get('/autocompletarDirecciones', async (req, res) => {
    try {
        const {direccion} = req.query
        const sugerencias = await get(autocompletarDirecciones(direccion))
        res.send(sugerencias)
    } catch (error) {
        res.send(apiResponse({}, 500,"Error"))
    }
})

route.get('/getMapaEstatico', async (req, res) => {
    try {
        const {id,size} = req.query
        const mapa = await getStream(getStaticMapa(id,size))
        res.setHeader('Content-disposition', 'attachment; filename=mapa.png');
        res.setHeader('Content-type','image/png');
        mapa.data.pipe(res);
    } catch (error) {
        res.send(apiResponse({}, 500,"Error"))
    }
})

route.get('/getLatLng', async (req, res) => {
    try {
        const {id} = req.query
        const datos = await get(getLatLng(id))
        res.send(datos)
    } catch (error) {
        res.send(apiResponse({}, 500,"Error"))
    }
})

route.get('/getDireccion', async (req, res) => {
    try {
        const {lat,lng} = req.query
        const datos = await get(getDireccion(lat,lng))
        res.send(datos)
    } catch (error) {
        res.send(apiResponse({}, 500,"Error"))
    }
})

module.exports = route