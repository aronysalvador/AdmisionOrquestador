const getConfigCategoriaOcupacional = () => {
  return {
    hostname: "https://ams-qa-midleware.azure-api.net",
    path: "/DatosGenerales/v1/CategoriaOcupacional",
    headers: {
      headers: {
        "Ocp-Apim-Subscription-Key": "2b4beff42a5b433cad5bb1bc67b81fc3",
        "Ocp-Apim-Trace": "true",
      },
    },
  };
};
module.exports = getConfigCategoriaOcupacional;
