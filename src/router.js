let Credentials = require("./credentials");
let chceckAPI = require("../api/checkAPI");
let convert = require("xml-to-json-promise");

exports.bbb = async (credentials, api, data) => {
  let Cred = await Credentials.data(credentials);
  let response = await chceckAPI.check(Cred, api, data);
  if (response !== false) {
    let finalResponse = await convert.xmlDataToJSON(response);
    return finalResponse;
  }
  let falseMessage ={response:{returncode:response,message:"Wrong API call"}}
  return falseMessage;
};
