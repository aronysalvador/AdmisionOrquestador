const getAlertas = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/alertas",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getAlertas;
