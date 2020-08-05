const getConfigCategoriaOcupacional = () => {
  return {
    url:
      "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/categoriaOcupacional",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getConfigCategoriaOcupacional;
