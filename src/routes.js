const routes = require('express').Router()

const controllers = require('./app/controllers')

routes.post('/dev', controllers.DevController.store)

module.exports = routes
