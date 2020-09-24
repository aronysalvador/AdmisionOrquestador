const getDocumentos = (codigo) => {
  console.log(codigo)
    return {
      url: `https://wa-desa-firmadigitaltemp.azurewebsites.net/api/admision/MostrarDocumento/?codigoGenerado=${codigo}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };
  module.exports = getDocumentos;
  