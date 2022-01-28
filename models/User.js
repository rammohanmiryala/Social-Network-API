const {
  Schema,
  model
} = require('mongoose');

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

// Schema to create Student model

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    max_length: 50,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, "Please fill a valid email address"],
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought',
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});


userSchema.virtual("friendCount").get(function () {
  return this.friends.length;

});

const User = model('User', userSchema);

module.exports = User;