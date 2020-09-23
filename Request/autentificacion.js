const autentificacion = () => {
    return {
      url: `${process.env.URL_MICROSERVICIO_AUTENTIFICACION}api/rutEquifax/verificarNroSerie`,
      
    };
  };

  module.exports = autentificacion;
  