 const mongoose = require("mongoose")

 const groupSchema = new mongoose.Schema({}, {timeseries: true})


module.exports = mongoose.model('Group', groupSchema)