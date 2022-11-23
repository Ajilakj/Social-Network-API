const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      // required: true, 
      // default: new ObjectId()
     },
     reactionBody: {
      type: String,
      required: true, 
      maximum:280,
     },
     username: {
      type: String,
      required: true, 
     },
     createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);


const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
