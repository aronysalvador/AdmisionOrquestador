const getIsapres = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/isapres",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getIsapres;
