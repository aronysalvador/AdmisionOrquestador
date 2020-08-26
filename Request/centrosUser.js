const postCentrosUser = () => {
    return {
      url: "https://wa-desa-bd.azurewebsites.net/api/centros",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };
  };

const getCentrosUser = (email) => {
return {
    url: "https://wa-desa-bd.azurewebsites.net/api/centros/getCenterUser?email="+email,
    headers: {
    "Content-Type": "application/json; charset=utf-8",
    },
};
};


  module.exports = {postCentrosUser , getCentrosUser};
  