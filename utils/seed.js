const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { userData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    await Thought.deleteMany({});

    await User.insertMany(userData);

    console.table(userData);
    console.info('Seeding complete! 🌱');
});
