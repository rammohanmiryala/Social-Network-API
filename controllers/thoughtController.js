const {
  User,
  Thought
} = require('../models');

module.exports = {

  getThought(req, res) {
    Thought.find()
      .then(async (thought) => {
        return res.json(thought);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create single user
  getSingleThought(req, res) {
    Thought.findOne({
      _id: req.params.thoughtId
    })
      .select("-__v")
      .then((thought) =>
        !thought ?
          res.status(404).json({
            message: "No user with this ID"
          }) :
          res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  createThought(req, res){
    Thought.create(req.body)
    .then((thought) =>
        !thought

          ? res.status(404).json({ message: 'No course with that ID' })
          : User.findOneAndUpdate(
            
            req.body.userId ,
            { $addToSet: { thoughts: thought._id }},
            { runValidators: true, new: true }
          )
      )
      console.log(userId
        )
      .then((thought) =>
      !thought
        ? res
            .status(404)
            .json({ message: 'No student found with that ID :(' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
   
  },



  




}












