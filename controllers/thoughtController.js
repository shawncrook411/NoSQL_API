const { Thought } = require('../models')


//test

module.exports = {
    async getThought(req, res){
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId }).select('-__v');
            if (!thought) return res.status(404).json({ message: 'No thought found' })

            res.json(thought)
        } catch (err) {
            console.error({ message: err })
            return res.status(500).json(err)
        }
    },

    async getThoughts(req, res){
        try {
            const thoughts = await Thought.find()
            res.json(thoughts)
        } catch (err) {
            console.error({ message: err })
            return res.status(500).json(err)
        }
    },

    async createThought(req, res){
        try {
            const thought = await Thought.create(req.body)
            res.json(thought)
        } catch (err) {
            console.error({ message: err })
            return res.status(500).json(err)
        }
    },

    async deleteThought(req, res){
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })
            if (!thought) return res.status(404).json({ message: 'No thought found' })

        } catch (err) {
            console.error({ message: err })
            return res.status(500).json(err)
        }
    },

    async updateThought(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
        
            if (!thought) return res.status(404).json({ message: 'No thought found' })
            return res.json(thought)

        } catch (err) {
            console.error({ message: err })
            return res.status(500).json(err)
        }
    },

    async createReaction(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            )

            if(!thought) return res.status(404).json({ message: 'No thought found' })
        } catch (err) {
            console.error({ message: err })
            return res.status(500).json(err)
        }
    },

    async deleteReaction(req, res){
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.parms.reactionId }}},
                { runValidators: true, new: true}
            )
        } catch (err) {
            console.error({ message: err })
            return res.status(500).json(err)
        }
    }
}