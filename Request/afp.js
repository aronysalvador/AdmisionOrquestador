const getAfp = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/afp/`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};
module.exports = getAfp;
