const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const { userExtractor, tokenExtractor } = require('../utils/middleware')
const User = require('../models/user')

userRouter.post('/', async (request, response) => {
  const { username, email, password, score } = request.body

  if ((username.length < 3 || password.length < 3)) {
    return response.status(400).json({ error: 'username/password has to be longer than 2 letters long'})
  }

  
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    passwordHash,
    email,
    score: score || 0,
    bookings: [],
    visits: 1,
    bookingAmount: 0
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

userRouter.patch('/', userExtractor, tokenExtractor, async (request, response) => {
  const { score } = request.body

  const updates = {}
  if (score !== undefined) updates.score = score
  
  if (Object.keys(updates).length === 0) {
    return response.status(400).json({ error: "No valid fields to update" })
  }

  const user = await User.findByIdAndUpdate(request.user, updates, { new: true })

  if (!user) {
    return response.status(404).json({ error: 'User not found' })
  }

  const userResponse = {
    username: user.username,
    email: user.email,
    score: user.score,
    bookings: user.bookings,
    token: request.token,
    bookingAmount: user.bookingAmount,
    visits: user.visits,
    role: user.role
  }

  response.status(200).json(userResponse)
})

userRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('bookings', { date: 1, length: 1})
  response.json(users)
})

module.exports = userRouter