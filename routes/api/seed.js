const router = require('express').Router()
const connection = require('../../config/connection')
const { Thought, User } = require('../../models')

router.post('/', (req,res) => {
    connection.once('open', async () => {

        let thoughtCheck = await connection.db.listCollections({ name: 'thought' }).toArray()
        if (thoughCheck.length) await connection.dropCollection('thought')

        let userCheck = await connection.db.listCollections({ name: 'user' }).toArray()
        if (userCheck.length) await connection.dropCollection('user')

        const users = []
        const thoughts = []
        


    
    })
})

module.exports = router
