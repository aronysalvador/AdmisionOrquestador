const getRazonSocial = (rutEmpresa) => {
  return {
    url: `https://wa-desa-msmiddlewaresap.azurewebsites.net/api/sucursales?rutEmpresa=${rutEmpresa}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getRazonSocial;
