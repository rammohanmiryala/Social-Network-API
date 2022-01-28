const { Schema, Types } = require('mongoose');
const moment = require("moment");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 10,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (formatDate) {
        moment(formatDate).format('MMMM Do YYYY');
      }
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


