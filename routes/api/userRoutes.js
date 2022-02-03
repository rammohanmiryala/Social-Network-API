const router = require('express').Router();
const {
  getUserInfo,
  getSingleUser,
  createUser,
  deleteUserById,
  updateUserById,
 
  
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUserInfo).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUserById).put(updateUserById)

// router.route('/:userId/friend/:friendId').post(addFriend).delete(deleteFriend);



// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);





module.exports = router;