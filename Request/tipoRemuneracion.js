const getConfigTipoRemuneracion = () => {
  return {
    url:
      "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/tipoRemuneracion",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getConfigTipoRemuneracion;
