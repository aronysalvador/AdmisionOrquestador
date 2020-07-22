const getIsapres = () => {
  return {
    url: "http://ci-desa-msmiddlewaresap.eastus.azurecontainer.io/api/isapres",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getIsapres;
