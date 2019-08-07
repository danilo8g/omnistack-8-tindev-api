const routes = require('express').Router()

const controllers = require('./app/controllers')

routes.post('/dev', controllers.DevController.store)
routes.post('/dev/:id/like', controllers.LikeController.store)

module.exports = routes
