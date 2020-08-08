let create = require("../src/create/create.controller");
let join = require("../src/join/join.controller");
let end = require("../src/end/end.controller");
let isMeetingRunning = require("../src/isMeetingRunning/isMeetingRunning.controller");
let getMeetingInfo = require("../src/getMeetingInfo/getMeetingInfo.controller");
let getMeetings = require("../src/getMeetings/getMeetings.controller");
let getRecordings = require("../src/getRecordings/getRecordings.controller");
let publishRecordings = require("../src/publishRecordings/publishRecordings.controller");
let deleteRecordings = require("../src/deleteRecordings/deleteRecordings.controller");
let updateRecordings = require("../src/updateRecordings/updateRecordings.controller");

exports.check = async (Cred, api, data) => {
  if (api !== "" && api === "create") {
    let finalResponse = await create.bbbCreate(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "join") {
    let finalResponse = await join.bbbJoin(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "isMeetingRunning") {
    let finalResponse = await isMeetingRunning.bbbisMeetingRunning(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "end") {
    let finalResponse = await end.bbbEnd(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "getMeetingInfo") {
    let finalResponse = await getMeetingInfo.bbbgetMeetingInfo(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "getMeetings") {
    let finalResponse = await getMeetings.bbbgetMeetings(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "getRecordings") {
    let finalResponse = await getRecordings.bbbgetRecordings(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "publishRecordings") {
    let finalResponse = await publishRecordings.bbbpublishRecordings(
      Cred,
      data
    );
    return finalResponse;
  }
  if (api !== "" && api === "deleteRecordings") {
    let finalResponse = await deleteRecordings.bbbdeleteRecordings(Cred, data);
    return finalResponse;
  }
  if (api !== "" && api === "updateRecordings") {
    let finalResponse = await updateRecordings.bbbupdateRecordings(Cred, data);
    return finalResponse;
  }
};
