const restful = require('node-restful')
const mongoose = restful.mongoose

//Create table
const taskSchema = new mongoose.Schema({
    description: { type: String, require: true},
    done: { type: Boolean, require: true, default: false},
    creationData:{ type: Date, default: Date.now}
})

module.exports = restful.model('Task', taskSchema )