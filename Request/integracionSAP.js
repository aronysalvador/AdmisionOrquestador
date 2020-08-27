const integracionSAP = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/integracionsap",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = integracionSAP;
