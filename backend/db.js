// Always try to create client using individual config, will help in different env

const { connect } = require("mongoose")
require("dotenv").config();
const url = process.env.URL
let connection = connect(url);

module.exports=connection