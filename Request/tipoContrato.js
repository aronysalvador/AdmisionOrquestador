const getConfigTipoContrato = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/tipoContrato",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getConfigTipoContrato;
