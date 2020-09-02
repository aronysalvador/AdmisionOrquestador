
const autocompletarDirecciones = (direccion) => {
  return {
    url: `https://wa-desa-geolocalizacion.azurewebsites.net/api/googleMaps/autocompletar?direccion=${direccion}`,
    headers: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  }
}

const getStaticMapa = (id,size) => {
  return {
    url: `https://wa-desa-geolocalizacion.azurewebsites.net/api/googleMaps/getStaticMap?id=${id}&size=${size}`,
  }
}

const getLatLng= (id) => {
  return {
    url: `https://wa-desa-geolocalizacion.azurewebsites.net/api/googleMaps/getLatLng?id=${id}`,
  }
}

const getDireccion= (lat,lng) => {
  return {
    url: `https://wa-desa-geolocalizacion.azurewebsites.net/api/googleMaps/getDireccion?lat=${lat}&lng=${lng}`,
  }
}

module.exports = {autocompletarDirecciones,getStaticMapa, getLatLng, getDireccion}