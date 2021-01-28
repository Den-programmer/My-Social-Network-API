const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// const getSubscriber = async (req, res, next) => {
//     let subscriber
//     try {
//         subscriber = await Subscriber.findById(req.params.id)
//         if (subscriber == null) {
//             return res.status(404).json({ message: 'Cannot find subscriber!' })
//         }
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }

//     res.subscriber = subscriber
//     next()
// }

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/profile/:gender', async (req, res) => {
    try {
        if() {
            
        } else {

        }
    } catch (err) {
        res.status(500).json('Server error!')
    }
})

// router.get('/:id', getSubscriber,  (req, res) => {
//     res.send(res.subscriber)
// })

// router.post('/', async (req, res) => {
//     const subscriber = new Subscriber({
//         name: req.body.name,
//         subscribedToChannel: req.body.subscribedToChannel
//     })
//     try {
//         const newSubscriber = await subscriber.save()
//         res.status(200).json(newSubscriber)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// router.patch('/:id', getSubscriber, async (req, res) => {
//     const { name, subscribedToChannel } = req.body
//     if (name && subscribedToChannel !== undefined || null) {
//         res.subscriber.name = req.body.name
//         res.subscriber.subscribedToChannel = req.body.subscribedToChannel
//     }
//     try {
//         const updatedSubscriber = await res.subscriber.save()
//         res.status(200).json(updatedSubscriber)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })

// router.delete('/:id', getSubscriber, async (req, res) => {
//     try {
//         await res.subscriber.remove()
//         res.json({ message: 'Subscriber is deleted!' })
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
// })

module.exports = router