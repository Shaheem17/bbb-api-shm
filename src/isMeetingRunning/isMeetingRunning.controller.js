const isMeetingRunningService = require("./isMeetingRunning.service");

exports.bbbisMeetingRunning = async (Cred, data) => {
    let response = await isMeetingRunningService.isMeetingRunning(Cred, data)
    return response;
  
};