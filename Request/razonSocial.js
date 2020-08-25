const getRazonSocial = (companyName) => {
  return {
    url: `https://wa-desa-bd.azurewebsites.net/api/razonSocial?companyName=${companyName}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getRazonSocialByRut = (companyName) => {
  return {
    url: `https://wa-desa-bd.azurewebsites.net/api/razonSocial/getByRut?rut=${rut}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = {getRazonSocial, getRazonSocialByRut};
