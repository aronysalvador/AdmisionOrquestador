const getSucursales = (rutEmpresa) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/sucursales?rutEmpresa=${rutEmpresa}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getSucursales;
