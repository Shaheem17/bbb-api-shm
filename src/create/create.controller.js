const createService = require("./create.service");

exports.bbbCreate = async (Cred, data) => {
  let response = await createService.create(Cred, data);
  return response;
};
