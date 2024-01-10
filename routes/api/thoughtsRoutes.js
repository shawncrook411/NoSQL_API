const router = require('express').Router()

const {
    getThought,
    getThoughts,
    createThought,
    deleteThought,
    updateThought,
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router