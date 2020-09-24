const getCodigos = (rut) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/codigoSiniestro/?rut=${rut}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };
  module.exports = getCodigos;
  