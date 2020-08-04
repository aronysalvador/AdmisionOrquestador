const getOcupaciones = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/ocupaciones/",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getOcupaciones;
