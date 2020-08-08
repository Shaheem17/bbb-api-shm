const getMeetingInfoService = require("./getMeetingInfo.service");

exports.bbbgetMeetingInfo = async (Cred, data) => {
  let response = await getMeetingInfoService.getMeetingInfo(Cred, data);
  return response;
};
