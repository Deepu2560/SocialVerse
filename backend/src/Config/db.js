// imported mongoose module
const mongoose = require("mongoose");

// exporting function that connect our server to mongodb database.
// mongodb database's url is hidden for security purpose.
module.exports = () => {
  return mongoose.connect(`${process.env.MONGODB_URL}`);
};
