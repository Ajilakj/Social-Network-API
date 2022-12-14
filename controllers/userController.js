const { User, Thought } = require('../models');
module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    // console.log("TESITNG CREATE USER")
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated thoughts
  deleteUser(req, res) {
    // console.log("TESITNG DELETE USER")
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated Thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    console.log("TESITNG UPDATE USER")
    User.findOneAndUpdate({ _id: req.params.userId })
      // .then((user) =>{
      //   if(!user){
      //     res.status(404).json({ message: 'No user with that ID' })
      //   }
      //   else{
      //     res.json({ message: 'User updated!' })
      //   }  
      // })
      // .catch((err) => res.status(500).json(err));
  },
};
