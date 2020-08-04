const getRegiones = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/regiones/",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getRegiones;
