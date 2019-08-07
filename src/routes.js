const routes = require('express').Router()

const controllers = require('./app/controllers')

routes.post('/dev', controllers.DevController.store)
routes.post('/dev/:id/like', controllers.LikeController.store)
routes.post('/dev/:id/dislike', controllers.DislikeController.store)

module.exports = routes
