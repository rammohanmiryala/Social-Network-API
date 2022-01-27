const {  Schema,  model} = require('mongoose');
const reactionsSchema = require('./Reaction');

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

    default: true,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionsSchema]

}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

thoughtSchema.virtual("reactionCount")
  .get(function () {
    return this.thoughtSchema.length;
  });

// postSchema.virtual('commentCount').get(function () {
//   return this.comments.length;
// });

// thoughtSchema
//   .virtual("reactionCount")
// //Counts amount of reactions

// var query = User.find();
// query.count(function (err, count) {
//   if (err) console.log(err)
//   else console.log("Count is", count)
// });
const Thought = model('thought', thoughtSchema);

module.exports = Thought;