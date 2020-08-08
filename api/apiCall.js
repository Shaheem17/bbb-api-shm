let rp = require("request-promise");

exports.apiCallBBB = async (api) => {
  let data = await rp(api);
  return data;
};
