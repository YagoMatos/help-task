const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Task Routes
    const taskService = require('../api/helpTask/taskService')
    //register - method  of noderestfull
    //take 4 verbs HTTP
    //this line register all urls relatives to webservice, bind the url task
    taskService.register(router, '/tasks')
}
