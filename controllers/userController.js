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
}