 const mongoose = require("mongoose")

 const groupSchema = new mongoose.Schema({
    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    name:{
        type: String,
        required: true,
        unique: true
    }
 }, {timeseries: true})


module.exports = mongoose.model('Group', groupSchema)