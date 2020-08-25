const getRazonSocial = (companyName) => {
  return {
    url: `https://wa-desa-bd.azurewebsites.net/api/razonSocial/getByName?companyName=${companyName}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getRazonSocialByRut = (rut) => {
  return {
    url: `https://wa-desa-bd.azurewebsites.net/api/razonSocial/getByRut?rut=${rut}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = {getRazonSocial, getRazonSocialByRut};
