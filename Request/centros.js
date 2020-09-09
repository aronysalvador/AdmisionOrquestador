const getCentros = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/centros/getall`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getCentros;
