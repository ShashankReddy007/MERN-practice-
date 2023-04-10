const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: async function () {
    try {
      await client.connect();
      _db = await client.db("employees");
    } catch (err) {
      console.error("Failed to connect to MongoDB");
      throw err;
    }
  },

  getDb: function () {
      //console.log("Testing3");
      return _db;
  },
};
 
