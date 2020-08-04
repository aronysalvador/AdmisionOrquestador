const getAfp = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/afp/",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getAfp;
