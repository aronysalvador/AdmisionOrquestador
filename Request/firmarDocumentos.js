const firmarDocumentos = () => {
      return {
        url: `${process.env.URL_MICROSERVICIO_FIRMA}/api/admision/Firmar/`,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      };
    };
    module.exports = firmarDocumentos;
    