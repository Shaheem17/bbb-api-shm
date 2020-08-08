const endService = require("./end.service");

exports.bbbEnd = async (Cred, data) => {
  let response = await endService.end(Cred, data);
  return response;
};
