const {
  Schema,
  model
} = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require("moment");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: (formatDate) =>
      moment(formatDate).format("dddd, MMMM Do YYYY hh:mm a"),
    default: true,
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema]

}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

thoughtSchema.virtual("reactionCount")
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;