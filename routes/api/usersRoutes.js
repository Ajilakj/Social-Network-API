const router = require('express').Router();
const {
  getSingleUser,
  getAllUser,
  createUser,
} = require('../../controllers/userController');

router.route('/').get(getAllUser).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;
