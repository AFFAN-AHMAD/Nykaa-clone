const { connect } = require("mongoose")
require("dotenv").config();
const url = process.env.URL
let connection = connect(url);

module.exports=connection