const Router = require('express-promise-router')
const apiResponse = require('../Utils/ApiUtil/apiResponseReducer')
const {getStaticMapa,autocompletarDirecciones} = require('../Request/geolocalizacion')
const get = require('../Utils/ApiUtil/http')
const getStream = require('../Utils/ApiUtil/httpGetStream')
const route = new Router();

route.get('/autocompletarDirecciones', async (req, res) => {
    try {
        const {direccion} = req.query
        await get(autocompletarDirecciones(direccion)).then(data =>{
            res.send(data)
        })
    } catch (error) {
        res.send(apiResponse({}, 500,"Error"))
    }
})

route.get('/getMapaEstatico', async (req, res) => {
    try {
        const {id,size} = req.query
        const mapa = await getStream(getStaticMapa(id,size))
        console.log("mapa",mapa)
        res.setHeader('Content-disposition', 'attachment; filename=mapa.png');
        res.setHeader('Content-type','image/png');
        mapa.data.pipe(res);

    } catch (error) {
        console.log(error)
        res.send(apiResponse({}, 500,"Error"))
    }
})


module.exports = route;