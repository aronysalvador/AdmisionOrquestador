const getCargos = () => {
  return {
    url: "http://ci-desa-msmiddlewaresap.eastus.azurecontainer.io/api/cargos",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getCargos;
