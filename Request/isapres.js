const getIsapresMiddleware = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/isapres`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getIsapresDb = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/isapres`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = { getIsapresDb, getIsapresMiddleware };
