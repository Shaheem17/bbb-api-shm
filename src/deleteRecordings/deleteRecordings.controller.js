const deleteRecordingsService = require("./deleteRecordings.service");

exports.bbbdeleteRecordings = async (Cred, data) => {
  let response = await deleteRecordingsService.deleteRecordings(Cred, data);
  return response;
};
