const username = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
];



// Get a random item given an array
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
// const getRandomName = () =>
//   `${getRandomArrItem(username)}`;


// Function to generate random assignments that we can add to student object.
const getRandomusernames = ()=> {
  const randomeusernames = [];
  for (let i = 0; i < username.length; i++) {
    randomeusernames.push({
      userName: username[i],
      email: username[i]+Math.floor(Math.random() * (99 - 18 + 1) + 18)+"@gamail.com",
    });
  }
  return randomeusernames;
};

const userData = getRandomusernames()

// Export the functions for use in seed.js
module.exports = {
  userData
};