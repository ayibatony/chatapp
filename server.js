const database = require("./database/index");
const app = require("./app");
require('dotenv').config();

const PORT = process.env.PORT


  // connect to database
  database.connect();

  app.listen(PORT, () => {
    console.log('Listening on port, ', PORT)
})
