const axios = require('axios');

const post = (config,body) =>{
    return new Promise ((resolve, reject) => {
        axios.post(config.url,body,config.headers).then(response => {
                resolve(response.data)
            })
            .catch(error => {
                console.log("error",error)
                reject({})
            });
        });
}
module.exports = post