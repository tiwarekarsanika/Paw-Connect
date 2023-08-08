const router = require('express').Router();
const {getTimelinePost, getPost, createPost, likePost, deletePost, updatePost} = require("../controllers/postController");

router.route('/').post(createPost);

router.route('/:id').put(updatePost).delete(deletePost).get(getPost);

router.route('/:id/like').put(likePost);

router.route('/timeline/all').get(getTimelinePost);

module.exports = router;