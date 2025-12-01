const bookingsRouter = require('express').Router()
const Booking = require('../models/booking')
const { userExtractor } = require('../utils/middleware')
const User = require('../models/user')
const Teacher = require('../models/teacher')

bookingsRouter.get('/', userExtractor, async (request, response) => {
    const bookings = await Booking.find({ user: request.user }).populate('teacher', { name: 1, subject: 1, price: 1})

    bookings.sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('.')
      const [dayB, monthB, yearB] = b.date.split('.')
      
      const dateA = new Date(`${yearA}-${monthA}-${dayA}`)
      const dateB = new Date(`${yearB}-${monthB}-${dayB}`)
      
      return dateA - dateB
    })

    if (!bookings) {
      response.status(500).json({ error: 'failed to fetch bookings '})
    }
    response.json(bookings)
})

bookingsRouter.post('/', userExtractor, async (request, response) => {
  if (!request.body.date || !request.body.length) {
    return response.status(400).json({ error: 'date or length missing' })
  }

  const teacher = await Teacher.findById(request.body.teacher)

  if (!teacher) {
    return response.status(400).json({ error: 'teacher missing' })
  }

  const user = await User.findById(request.user)

  if (!user) {
    return response.status(400).json({ error: 'userId missing' })
  }

  const booking = new Booking({
    ...request.body,
    teacher: teacher,
    user: user
  })

  const savedBooking = await booking.save()
  
  await User.findByIdAndUpdate(
    user._id,
    {
      $push: { bookings: savedBooking._id },
      $inc: { bookingAmount: 1 }
    }
  )
  
  await User.findByIdAndUpdate()

  response.status(201).json(savedBooking)
})

bookingsRouter.delete('/:id', userExtractor, async (request, response) => {
  const userId = request.user
  const booking = await Booking.findById(request.params.id)

  if (!booking) {
     return response.status(404).json({ error: 'blog doesnt exist'})
  }

  const bookingUserId = booking.user.toString()

  if (userId && userId === bookingUserId) {
    await Booking.findByIdAndDelete(request.params.id)

    await User.findByIdAndUpdate(userId, { $pull: { bookings: request.params.id } })

    response.status(204).end()
  } else {
    return response.status(401).json({ error: 'auth error' })
  }
})

module.exports = bookingsRouter
