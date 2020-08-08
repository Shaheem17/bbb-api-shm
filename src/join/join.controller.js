const joinService = require("./join.service");

exports.bbbJoin = async (Cred, data) => {
  let response = await joinService.join(Cred, data);
  return response;
};
