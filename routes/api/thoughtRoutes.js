const router = require('express').Router();
const {
    getThought,
    createThought,
    getSingleThought,
    deletethoughtId,
    updatethoughtId,
    deleteReaction,
    createReaction
} = require('../../controllers/ThoughtController.js');


// // /api/courses
router.route('/')
.get(getThought)
.post(createThought);

// /api/courses/:courseId

router.route('/:thoughtId')
.get(getSingleThought)
.put(updatethoughtId)
.delete(deletethoughtId);

router.route('/:thoughtId')
    .post(createReaction)
    

router.route('/:thoughtId/:reactionsId')
    .delete(deleteReaction);
module.exports = router;