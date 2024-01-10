const mongoose = require('mongoose')

const reactionSchema = new mongoose.Schema({
    reactionId: { type: ObjectId, default: ObjectId() },
    reactionBody: { type: String, required: true },
    username: { type: String, required: true },    
    createdAt: { type: Date, default: Date.now },
})

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true },  
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reaction: [reactionSchema],
})

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length
})

const Thought = mongoose.model('Thought', thoughtSchema)

module.exports = { Thought }