const teachersRouter = require('express').Router()
const Teacher = require('../models/teacher')
const { userExtractor } = require('../utils/middleware')

teachersRouter.get('/', async (request, response) => {
  const teachers = await Teacher.find({})
  response.json(teachers)
})

teachersRouter.delete('/:id', userExtractor, async (request, response) => {
  const isAdmin = request.isAdmin

  const teacher = await Teacher.findById(request.params.id)

  if (!teacher) {
    return response.status(404).json({ error: 'teacher doesnt exist'})
  }

  if (!isAdmin) {
    return response.status(403).json({ error: 'admin access required' })
  }

  await Teacher.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

module.exports = teachersRouter