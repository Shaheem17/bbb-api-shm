const getRecordingsService = require("./getRecordings.service");

exports.bbbgetRecordings = async (Cred, data) => {
  let response = await getRecordingsService.getRecordings(Cred, data);
  return response;
};
