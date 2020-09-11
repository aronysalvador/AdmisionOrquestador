const getConfigValidate = (rutEmpresa, BpSucursal, rutPaciente) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/patient/validate?rutEmpresa=${rutEmpresa}&BpSucursal=${BpSucursal}&rutPaciente=${rutPaciente}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

const getConfigGetPaciente = (rut) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_MIDDLEWARE_SAP}/api/patient/getPaciente?rut=${rut}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};



const getPacienteValido = (rut) => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/paciente/?rut=${rut}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

module.exports = { getConfigValidate, getConfigGetPaciente, getPacienteValido };
