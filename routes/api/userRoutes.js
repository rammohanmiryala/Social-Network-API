const router = require('express').Router();
const {
  getUserInfo,
  getSingleUser,
  createUser,
  deleteUser,
  addfriend,
  removefriend,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUserInfo).post(getSingleUser);

// // /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

// module.exports = router;
