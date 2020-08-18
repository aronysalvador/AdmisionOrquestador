const axios = require('axios');

const put = (config,body) =>{
    return new Promise ((resolve, reject) => {
        axios.put(config.url,body,config.headers).then(response => {
                resolve(response.data)
            })
            .catch(error => {
                console.log("error",error)
                reject({})
            });
        });
}
module.exports = put