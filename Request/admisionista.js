const getAliasSapByEmail = (email) => {
  return {
    url: `https://wa-desa-msmiddlewaresap.azurewebsites.net/api/getAliasSapByEmail?email=${email}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getAliasSapByEmail;
