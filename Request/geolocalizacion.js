const autocompletarDirecciones = (direccion) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_GEOLOCALIZACION}/api/googleMaps/autocompletar?direccion=${direccion}`,
    headers: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
};

const getStaticMapa = (id, size) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_GEOLOCALIZACION}/api/googleMaps/getStaticMap?id=${id}&size=${size}`,
  };
};

const getLatLng = (id) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_GEOLOCALIZACION}/api/googleMaps/getLatLng?id=${id}`,
  };
};

const getDireccion = (lat, lng) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_GEOLOCALIZACION}/api/googleMaps/getDireccion?lat=${lat}&lng=${lng}`,
  };
};

module.exports = {
  autocompletarDirecciones,
  getStaticMapa,
  getLatLng,
  getDireccion,
};
