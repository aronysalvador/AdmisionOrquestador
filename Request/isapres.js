
const getIsapresMiddleware = () => {
  return {
    url: "https://wa-desa-msmiddlewaresap.azurewebsites.net/api/isapres",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getIsapresDb = () => {
  return {
    url: "http://localhost:3001/api/isapres",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = {getIsapresDb, getIsapresMiddleware};
