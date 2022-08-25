const {connect} = require("mongoose")
let connection = connect("mongodb://localhost:27017/Nykaa");

module.exports=connection