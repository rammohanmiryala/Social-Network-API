const {
    User,
    Thought
} = require('../models');

module.exports = {
    // Get all Users
    getUserInfo(req, res) {
        User.find()
            .then(async (user) => {
                return res.json(user);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // create single user
    getSingleUser(req, res) {
        User.findOne({
                _id: req.params.userId
            })
            .select("-__v")
            .then((user) =>
                !user ?
                res.status(404).json({
                    message: "No user with this ID"
                }) :
                res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteUserById(req, res) {
        User.findOneAndRemove({
                _id: req.params.userId
            })
            .then((user) =>
                !user ?
                res.status(404).json({
                    message: 'No such student exists'
                }) :
                Thought.findOneAndUpdate({
                    thought: req.params.thoughtID
                }, {
                    $pull: {
                        thoughts: req.params.thoughtID
                    }
                }, {
                    new: true
                })
            )
            .then((thought) =>
                !thought ?
                res.status(404).json({
                    message: 'User deleted, but no courses found',
                }) :
                res.json({
                    message: 'User successfully deleted'
                })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });

    },
    updateUserById(req, res) {
        User.findByIdAndUpdate(
                req.params.userId, {
                    $set: {
                        userName: req.body.userName
                    }
                }, {
                    runValidators: true,
                    new: true
                }
            )
            .then((user) =>
                !user ?
                res.status(404).json({
                    message: "No user with this id!"
                }) :
                res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
}

