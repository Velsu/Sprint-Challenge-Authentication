const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({ username, password });
  user
    .save()
    .then(response => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
};

module.exports = {
  createUser
};
