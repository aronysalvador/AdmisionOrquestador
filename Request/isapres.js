const getIsapres = () => {
  return {
    url: `http://sfc-prod-middleware.eastus.cloudapp.azure.com:8080/api/dominios/ObtenerListadoIsapres`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getIsapres;
