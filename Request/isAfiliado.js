const getConfigIsAfiliado = (rut) => {
  return {
    url: `https://wa-desa-msmiddlewaresap.azurewebsites.net/api/patient/isAfiliado?rut=${rut}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getConfigIsAfiliado;
