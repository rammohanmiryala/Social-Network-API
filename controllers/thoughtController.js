const { User, Thought } = require('../models');

module.exports = {
  // get all thoughts
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
  // get single Thought
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
  // create single Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
        !thought

          ? res.status(404).json({ message: 'No course with that ID' })
          : User.findByIdAndUpdate(

            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { runValidators: true, new: true }
          )

            .then((thought) =>
              !thought
                ? res
                  .status(404)
                  .json({ message: 'No student found with that ID :(' })
                : res.json(thought)
            )


      )
      .catch((err) => res.status(500).json(err));

  },
  // update  single Thought
  updatethoughtId(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $set: { thoughtText: req.body.thoughtText } },
      { runValidators: true, new: true }

    )
      .then((thought) =>
        !thought
          ? res
            .status(404)
            .json({ message: 'No student found with that ID :(' })
          : res.json(thought)
      )
  },
  // get delete Thought
  deletethoughtId(req, res) {
    Thought.findByIdAndDelete(
      { _id: req.params.thoughtId }
    )
      .then((thought) =>
        !thought
          ? res
            .status(404)
            .json({ message: 'No Thought with that ID' })
          : res.json({ message: "Thought has been deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a reaction to thought
  createReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $push: { reactions: req.body } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: req.params.reactionId } },
      { new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id!" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err); res.status(500).json(err);
      });

  }

}




















