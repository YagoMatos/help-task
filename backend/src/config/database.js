const mongoose = require('mongoose')
//take the warning about api mongo (depreciate)
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/helpTask')