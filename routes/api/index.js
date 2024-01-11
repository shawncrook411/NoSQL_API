const router = require('express').Router()
const thoughtsRoutes = require('./thoughtsRoutes')
const userRoutes = require('./userRoutes')
const seedRoute = require('./seed')


router.use('/thoughts', thoughtsRoutes)
router.use('/user', userRoutes)
router.use('/seed', seedRoute)

module.exports = router