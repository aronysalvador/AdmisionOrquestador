
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

module.exports = {autocompletarDirecciones,getStaticMapa}