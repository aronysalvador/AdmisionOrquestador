const axios = require('axios');

const get = (config) =>{
    return new Promise ((resolve, reject) => {
        console.log("config",config)
        axios.get(config.url,config.headers).then(response => {
                console.log("response.data",response.data)
                resolve(response.data)
            })
            .catch(error => {
                console.log("error",error)
                reject({})
            });
        });
}
module.exports = get