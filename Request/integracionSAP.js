const integracionSAP = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/integracionsap`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = integracionSAP;
