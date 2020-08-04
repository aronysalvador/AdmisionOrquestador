const getComunas = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/comunas/",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getComunas;
