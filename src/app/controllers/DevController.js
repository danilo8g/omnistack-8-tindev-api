const axios = require('axios')
const Dev = require('../models/Dev')

class DevController {
  async index (req, res) {
    const { user } = req.headers

    const loggedDev = await Dev.findById(user)

    const devs = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    })

    return res.status(200).json(devs)
  }

  async store (req, res) {
    const { username } = req.body
    const response = await axios.get(`https://api.github.com/users/${username}`)

    const userExists = await Dev.findOne({ user: username })

    if (userExists) {
      return res.status(200).json(userExists)
    }

    const { name, bio, avatar_url: avatar } = response.data

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    })

    return res.status(200).json(dev)
  }
}

module.exports = new DevController()
