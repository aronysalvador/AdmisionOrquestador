const getUpdateAdmisiones = () => {
    return {
      url: "https://wa-desa-bd.azurewebsites.net/api/sap/updatestate",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };
  module.exports = {getUpdateAdmisiones};