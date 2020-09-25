const getDocumentos = (codigo) => {
  console.log(codigo)
    return {
      url: `${process.env.URL_MICROSERVICIO_FIRMA}/api/admision/MostrarDocumento/?codigoGenerado=${codigo}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };
  module.exports = getDocumentos;
  