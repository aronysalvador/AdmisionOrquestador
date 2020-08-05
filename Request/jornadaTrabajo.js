const getConfigJornadaTrabajo = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/jornadaTrabajo",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getConfigJornadaTrabajo;
