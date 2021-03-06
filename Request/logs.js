// const postLog = () => {
//     return {
//       url: "http://localhost:3001/api/logs/begin",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//     };
//   };
// const postEndLog = () => {
//     return {
//       url: "http://localhost:3001/api/logs/end",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//     };
//   };

const handleLog = () => {
  return {
    url: `${process.env.URL_MICROSERVICIO_DATABASE}/api/logs`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

// module.exports = { postLog, postEndLog, handleLog };
module.exports = { handleLog };
