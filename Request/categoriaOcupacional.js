const getConfigCategoriaOcupacional = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/categoriaOcupacional`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getConfigCategoriaOcupacional;
