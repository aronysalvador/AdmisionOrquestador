const getAliasSapByEmail = (email) => {
  return {
    url: `https://wa-desa-bd.azurewebsites.net/api/usuarioSAP/getAliasSAP?email=${email}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getAliasSapByEmail;
