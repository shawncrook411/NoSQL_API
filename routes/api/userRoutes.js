const router = require('express').Router()

const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController.js')

router.route('/').get(getUsers).post(createUser)
router.route('/friend').post(addFriend).delete(removeFriend)
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router