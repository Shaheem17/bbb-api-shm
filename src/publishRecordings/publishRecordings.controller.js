const publishRecordingsService = require("./publishRecordings.service");

exports.bbbpublishRecordings = async (Cred, data) => {
  let response = await publishRecordingsService.publishRecordings(Cred, data);
  return response;
};
