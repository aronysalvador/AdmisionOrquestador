const getEmailTelefono = (rut) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/firmadigital/datosFirma/?rut=${rut}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };
  module.exports = getEmailTelefono;
  