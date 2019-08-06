const routes = require('express').Router()

const controllers = require('./app/controllers')

routes.get('/dev', controllers.DevController.store)

module.exports = routes
