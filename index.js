/**
 * Carga del SDK Azure Application Insights para NodeJS, por seguridad la instrumentation key
 * debe estar guardada en una variable de entorno en el servidor
 */
const appInsights = require("applicationinsights");
appInsights.setup('your_instrmentation_key').start()
const express = require('express')
const morgan = require('morgan')
const sap = require('./routes/sap')
var cors = require('cors')

const app = express()
/**
 * En esta sección se realiza la carga de las funciones middleware de express, los middleware
 * pueden custom o build-in en express
 */
app.use(express.json()) 
app.use(morgan('dev'))
app.use(cors()) 
app.use('/api/employee', sap) 

const port = 80;
app.listen(port, () => { console.log(`Listen on port ${port}`) })

