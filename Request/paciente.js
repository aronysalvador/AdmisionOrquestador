const getConfigValidate = (rutEmpresa, BpSucursal, rutPaciente) => {
  return {
    url: `https://wa-desa-msmiddlewaresap.azurewebsites.net/api/patient/validate?rutEmpresa=${rutEmpresa}&BpSucursal=${BpSucursal}&rutPaciente=${rutPaciente}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getConfigGetPaciente= (rut) => {
  return {
    url: `https://wa-desa-msmiddlewaresap.azurewebsites.net/api/patient/getPaciente?rut=${rut}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = {getConfigValidate,getConfigGetPaciente};
