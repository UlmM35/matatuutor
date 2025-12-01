const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const { usernameOrEmail, password } = request.body

  if (!usernameOrEmail) {
    return response.status(400).json({ error: 'username or email required' })
  }

  const user = await User.findOne({
    $or: [
      { username: usernameOrEmail},
      { email: usernameOrEmail}
    ]
  })

  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $inc: { visits: 1 } },
      { new: true }
  )

  const userForToken = {
    username: user.username,
    id: user._id,
    role: user.role
  }

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60 * 60 })

  response
    .status(200)
    .send({
      token,
      username: updatedUser.username,
      email: updatedUser.email,
      score: updatedUser.score,
      bookingAmount: updatedUser.bookingAmount,
      visits: updatedUser.visits,
      role: updatedUser.role
    })
})      

module.exports = loginRouter