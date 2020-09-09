const getAlertas = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/alertas`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getAlertas;
