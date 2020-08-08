const apiHelper = require("../apiHelper.json");
let shaconvert = require("sha1");
let generate = require("../../api/generator");
let apiCallFunction = require("../../api/apiCall");

exports.create = async (credentials, data) => {
  let extension = apiHelper.apiExtension;
  let apiCall = apiHelper.joinAPI;
  let queryParams = await generate.generateQueryParams(data);
  let sha1 = shaconvert(apiCall + queryParams + credentials.salt);
  let api =
    credentials.url + extension +"/"+ apiCall+ "?" + queryParams + "&checksum=" + sha1;
  let responseFromBBB = await apiCallFunction.apiCallBBB(api);
  return responseFromBBB;
};
