const getProfesiones = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/profesiones`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getProfesiones;
