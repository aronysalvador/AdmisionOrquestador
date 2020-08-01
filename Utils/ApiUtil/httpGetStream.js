const axios = require("axios");

const getStream = (config) => {
  return new Promise((resolve, reject) => {
    const {url} = config
    axios
      ({url,method: 'GET',responseType: 'stream'})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject({error})
      })
  });
};
module.exports = getStream