const Router = require('express-promise-router')
const apiResponse = require("../Utils/ApiUtil/apiResponseReducer");
const post = require("../Utils/ApiUtil/httpPost");
const { postLog, postEndLog } = require("../Request/logs");

const route = new Router();

route.post('/beginLog', async (req, res) => {
    try {
        const result = await post(postLog(), req.body);
        res.send(result);
    } catch (error) {
        res.send(apiResponse([], 500, "Error"));
    }
})

route.post('/endLog', async (req, res) => {
    try {
        const result = await post(postEndLog(), req.body);
        res.send(result);
    } catch (error) {
        res.send(apiResponse([], 500, "Error"));
    }
})

module.exports = route