const router = require('express').Router();
const {updateUser, deleteUser, getUser, followUser, unfollowUser} = require('../controllers/userController');

router.route('/:id').put(updateUser).delete(deleteUser).get(getUser);

router.route('/:id/follow').put(followUser);

router.route('/:id/unfollow').put(unfollowUser);

module.exports = router;