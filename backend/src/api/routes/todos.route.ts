import { Router } from 'express'
import { todosController } from '../../app/controllers'

const todosRoute = Router()

todosRoute.get('/:id', async (req, res) => {
  const result = await todosController.get(req.params)
  res.json(result)
})

todosRoute.put('/:id', async (req, res) => {
  const result = await todosController.edit(req.params, req.body)
  res.json(result)
})

todosRoute.delete('/:id', async (req, res) => {
  await todosController.remove(req.params)
  res.sendStatus(204)
})

todosRoute.post('/', async (req, res) => {
  const result = await todosController.add(req.body)
  res.status(201).json(result)
})

todosRoute.get('/', async (req, res) => {
  const result = await todosController.list()
  res.json(result)
})

export { todosRoute }
