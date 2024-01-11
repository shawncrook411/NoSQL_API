const { User, Thought } = require('../models')

module.exports = {
    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.courseId }).populate('thoughts')

            if(!user) return res.status(404).json({ message: 'No user found' })

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async getUsers(req, res) {
        try {
            const users = await User.find().populate('thoughts')
            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            res.json(User)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )

            if(!user) res.status(404).json({ message: 'No user found' })

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete({ _id: req.params.userId })

            if(!user) res.status(404).json({ message: 'No user found' })

            await Thought.deleteMany({ _id: { $in: user.thoughts }})
            res.json({ message: 'User and thoughts deleted' })
        } catch (err) {
            res.status(500).json(err)
        }
    },
}