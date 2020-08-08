const updateRecordingsService = require("./updateRecordings.service");

exports.bbbupdateRecordings = async (Cred, data) => {
  let response = await updateRecordingsService.updateRecordings(Cred, data);
  return response;
};
