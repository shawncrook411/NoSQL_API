const router = require('express').Router()

const {
    getThought,
    getThoughts,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(createThought)

router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router