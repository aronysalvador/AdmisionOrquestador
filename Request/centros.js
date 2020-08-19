const getCentros = () => {
  return {
    url: "https://wa-desa-bd.azurewebsites.net/api/centros/getall",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getCentros;
