const Task = require('./helpTask')

Task.methods(['get', 'post', 'put', 'delete'])

//new - when I att some document, to comeback document after register
Task.updateOptions({new: true, runValidators: true})

module.exports = Task