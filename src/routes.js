const routes = require('express').Router()

const controllers = require('./app/controllers')

routes.get('/devs', controllers.DevController.index)
routes.post('/devs', controllers.DevController.store)
routes.post('/devs/:id/like', controllers.LikeController.store)
routes.post('/devs/:id/dislike', controllers.DislikeController.store)

module.exports = routes
