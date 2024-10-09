const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    baseUrl:{
        type: String,
        required: true
    }

}, {timeseries: true})

module.exports = mongoose.model('Project', projectSchema)