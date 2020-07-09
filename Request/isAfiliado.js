const getConfigIsAfiliado = (rut) => {
  return {
    url: `http://ci-desa-msmiddlewaresap.eastus.azurecontainer.io/api/patient/isAfiliado?rut=${rut}`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    }
  }
}
module.exports = getConfigIsAfiliado