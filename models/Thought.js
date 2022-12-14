const { Schema, model } = require('mongoose');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
     thoughtText: {
          type: String,
          required: true, 
          minlength:1,
          maxlength:280,
        },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
     type: String,
     required: true, 
   },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reactionSchema',
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

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('post', thoughtSchema);

module.exports = Thought;
