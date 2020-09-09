const getRazonSocial = (companyName) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/razonSocial/getByName?companyName=${companyName}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getRazonSocialByRut = (rut) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/razonSocial/getByRut?rut=${rut}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = { getRazonSocial, getRazonSocialByRut };
