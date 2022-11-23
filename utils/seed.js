const connection = require('../config/connection');
const { User, Thoughts, Reaction } = require('../models');
const mongoose = require('mongoose');
// // Import functions for seed data
// const { getRandomColor, getRandomPost, genRandomIndex } = require('./data');

// // Start the seeding runtime timer
// console.time('seeding');

// // Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
//   await Thoughts.deleteMany({});
//   await Reaction.deleteMany({});

  User.create([
     { username: 'user 1', email: 'user1@test.com',thoughts:[1,2], friends: 2 },
     { username: 'user 2', email: 'user2@test.com',thoughts:[], friends: 1 },
     { username: 'user 3', email: 'user3@test.com',thoughts:[3], friends: 5 },
     { username: 'user 4', email: 'user4@test.com',thoughts:[5], friends: 3 },
     { username: 'user 5', email: 'user5@test.com',thoughts:[4], friends: 4 },
     
   ]);
//   // Empty arrays for randomly generated posts and tags
//   const tags = [];
//   const posts = [];

//   // Function to make a post object and push it into the posts array
//   const makePost = (text) => {
//     posts.push({
//       published: Math.random() < 0.5,
//       text,
//       tags: [tags[genRandomIndex(tags)]._id],
//     });
//   };

//   // Create 20 random tags and push them into the tags array
//   for (let i = 0; i < 20; i++) {
//     const tagname = getRandomColor();

//     tags.push({
//       tagname,
//       color: tagname,
//     });
//   }

//   // Wait for the tags to be inserted into the database
//   await Tags.collection.insertMany(tags);

//   // For each of the tags that exist, make a random post of length 50
//   tags.forEach(() => makePost(getRandomPost(50)));

//   // Wait for the posts array to be inserted into the database
//   await Post.collection.insertMany(posts);

//   // Log out a pretty table for tags and posts, excluding the excessively long text property
//   console.table(tags);
//   console.table(posts, ['published', 'tags', '_id']);
//   console.timeEnd('seeding');
//   process.exit(0);
});
