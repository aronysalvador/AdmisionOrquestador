const getProfesiones = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/profesiones",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getProfesiones;
