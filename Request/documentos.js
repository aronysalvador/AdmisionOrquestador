  const getDocumentos = (codigo) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_FIRMA}/api/admision/MostrarDocumento/?codigoGenerado=${codigo}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };
  
  const showDocument = (documento) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_FIRMA}/api/admision/MostrarDocumentoFirmado/?documento=${documento}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };

  const saveDocuments = () => {
    return {
      url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/firmadigital/insertDocumento`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };

  const getDocumentosbyAdmisionista = (correo) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/firmadigital/getDocumentosbyAdmisionista/?correo=${correo}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };

  const getDocumentobyCode = (codigo) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/firmadigital/getDocumento/?codigo=${codigo}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };

  const updateEstadoDocumento = (datos) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/firmadigital/updateEstado?codigo=${datos.codigo}&estado=${datos.estado}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };

  const getSiniestrobyId = (id) => {
    return {
      url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/firmadigital/getSiniestro?id=${id}`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };

  module.exports = { getDocumentos, saveDocuments, getDocumentosbyAdmisionista, getDocumentobyCode, updateEstadoDocumento, getSiniestrobyId, showDocument };

  