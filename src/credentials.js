exports.data = async (req) => {
  let URL = req.url;
  let Salt = req.salt;
  let credentials = {
    url: URL,
    salt: Salt,
  };
  return credentials;
};
