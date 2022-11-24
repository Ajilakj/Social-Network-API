const { Schema, model } = require('mongoose');

// Schema to create Post model
const userSchema = new Schema(
  {
    username: {
     type: String,
     unique: true,
     required: true, 
     trim: true
    },
    email: {
     type: String,
     unique: true,
     required: true, 
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
     {
       type: Schema.Types.ObjectId,
       ref: 'User',
     },
   ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` 
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User = model('User', userSchema);

module.exports = User;
