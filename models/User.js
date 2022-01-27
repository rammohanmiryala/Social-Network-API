const {
  Schema,
  model
} = require('mongoose');

// var validateEmail = function (email) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email)
// };

// Schema to create Student model

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      match: [
        /^([a-z0-9_\.-]+)@([a-z0-9]+)\.([a-z]{2,6})$/,
        "Please enter a valid email.",
      ],
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
      } 
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }

    ],
  },
  {
  toJSON: {
    getters: true,
  },
  id: false,
  }
);


const User = model('User', userSchema);

module.exports = User;