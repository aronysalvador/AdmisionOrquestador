const Router = require('express-promise-router')
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const post = require("../Utils/ApiUtil/httpPost");
const get = require('../Utils/ApiUtil/http')
// const { postLog, postEndLog, handleLog } = require("../Request/logs");
const { handleLog } = require("../Request/logs");
const { getDataReport } = require("../Request/bd");

const route = new Router();

  // PRIMERA VERSION //
//   route.post('/beginLog', async (req, res) => {
//     try {
//         const result = await post(postLog(), req.body);
//         res.send(result);
//     } catch (error) {
//         res.send(apiResponse([], 500, "Error"));
//     }
// })

// route.post('/endLog', async (req, res) => {
//     try {
//         const result = await post(postEndLog(), req.body);
//         res.send(result);
//     } catch (error) {
//         res.send(apiResponse([], 500, "Error"));
//     }
// })
// PRIMERA VERSION //

// SEGUNDA VERSION //
route.post('/', async (req, res) => {
    try {
        const result = await post(handleLog(), req.body);
        res.send(result);
    } catch (error) {
        res.send(apiResponse([], 500, "Error"));
    }
})

route.get('/report', async (req, res) => {

    try {
        await get(getDataReport()).then((data) => {
          console.log("in here...");

          var html = `    
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
              <h3 style="text-align:center">REPORTERÍA</h3>

              <table width="100%">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Centro</th>
                        <th>Tipo Siniestro</th>
                        <th>Admisionista</th>
                        <th>Rut Paciente</th>
                        <th>Bp Paciente</th>
                        <th>Inicio</th>
                        <th>Fin</th>
                        <th>Siniestro</th>
                        <th>Episodio</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
              `;
                 data.data.forEach(ele => {
                    html+=`                    
                        <tr>
                            <td>${ele.Id}</td>
                            <td>${ele.Fecha ? ele.Fecha : ''}</td>
                            <td>${ele.centro ? ele.centro : ''}</td>
                            <td>${ele.tiposiniestro ? ele.tiposiniestro : ''}</td>
                            <td>${ele.Usuario ? ele.Usuario : ''}</td>
                            <td>${ele.Rut_Paciente ? ele.Rut_Paciente : ''}</td>
                            <td>${ele.Bp_Paciente ? ele.Bp_Paciente : ''}</td>
                            <td>${ele.inicio ? ele.inicio : ''}</td>
                            <td>${ele.fin ? ele.fin : '' }</td>
                            <td>${ele.N_Siniestro ? ele.N_Siniestro : ''}</td>
                            <td>${ele.N_Episodio ? ele.N_Episodio : ''}</td>
                            <td>${ele.Estado ? ele.Estado : ''}</td>
                        </tr>
                    `
                });

              html+=`
                </tbody>
              </table>
          </body>
          </html>
         `
  
        res.send(html)

        });
      } catch (error) {
        res.send(apiResponse({}, 500, "Error: "+String(error)));
      }  
})
// SEGUNDA VERSION //

module.exports = route