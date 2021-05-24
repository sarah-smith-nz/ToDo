const express = require('express')

const db = require('../db/tasks')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getTasks()
    .then(results => {
      res.json({ todos: results })
      return null
    })
    .catch(err => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  const { name, done } = req.body

  return db.addTasks({ name, done })
    .then(newestTask => {
      res.json(newestTask)
      return null
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.put('/:id', (req, res) => {
  const newestTask = req.body
  db.updateTasks(newestTask)
    .then((result) => {
      res.status(201).json(result)
      return null
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.deleteTasks(id)
    .then(() => {
      res.status(200)
        .json('deleted')
      return null
    })

    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router

// router.delete('/', (req, res) => {
//   const { id } = req.body
//   db.deleteColor(id)
//     .then(() => {
//       res.status(200).json('deleted')
//       return null
//     })
//     .catch((err) => {
//       console.log(err.message)
//       res.status(500).json({
//         error: {
//           title: 'Could not delete color'
//         }
//       })
//     })
// })
