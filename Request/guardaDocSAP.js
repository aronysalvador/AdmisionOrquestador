const guardaDocSAP = () => {
    return {
      url: `${process.env.URL_MICROSERVICIO_FIRMA}/api/admision/GuardarSAP/`,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };
  module.exports = guardaDocSAP;
  