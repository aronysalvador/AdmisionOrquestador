const getUpdateAdmisiones = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/sap/updatestate`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
const getDataReport = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/logs/report`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = { getUpdateAdmisiones, getDataReport };
