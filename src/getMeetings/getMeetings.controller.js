const getMeetingsService = require("./getMeetings.service");

exports.bbbgetMeetings = async (Cred, data) => {
  let response = await getMeetingsService.getMeetings(Cred, data);
  return response;
};
