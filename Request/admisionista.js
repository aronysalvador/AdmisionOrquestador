const getAliasSapByEmail = (email) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/usuarioSAP/getAliasSAP?email=${email}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getAliasSapByEmail;
