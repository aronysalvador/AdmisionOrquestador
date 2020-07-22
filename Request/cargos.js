const getCargos = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/cargos",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getCargos;
