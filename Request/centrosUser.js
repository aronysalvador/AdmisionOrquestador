const postCentrosUser = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/centros`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getCentrosUser = (email) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/centros/getCenterUser?email=${email}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = { postCentrosUser, getCentrosUser };
