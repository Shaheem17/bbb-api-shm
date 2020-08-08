exports.generateQueryParams = async (data) => {
  let counter = 0;
  let queryParams = "";
  for (let index in data) {
    if (data.hasOwnProperty(index)) {
      let seperator = "&";
      if (counter === 0) {
        seperator = "";
      }
      queryParams += seperator + index + "=" + data[index];
      counter++;
    }
  }
  return queryParams;
};
