let Credentials = require("./credentials");
let chceckAPI = require("../api/checkAPI");
let convert = require("xml-to-json-promise");

exports.bbb = async (credentials, api, data) => {
  let Cred = await Credentials.data(credentials);
  let response = await chceckAPI.check(Cred, api, data);
  let finalResponse = await convert.xmlDataToJSON(response);
  return finalResponse;
};
