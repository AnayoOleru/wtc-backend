const db = require('../database/dbConfig');

const getUsers = db('users');

const getAUser = id =>
  db('users')
    .where({ id })
    .first();
const getUserByEmail = email =>
  db('users')
    .where({ email })
    .first();
const registerUser = user =>
  db('users')
    .insert(user)
    .returning('*');
const updateVerifiedStatus = (id, value) =>
  db('users')
    .update('isVerified', value)
    .where({ id })
    .returning('*');
const updatePassword = (id, newPassword) =>
  db('users')
    .update('password', newPassword)
    .where({ id })
    .returning('*');

module.exports = {
  getAUser,
  registerUser,
  getUserByEmail,
  updateVerifiedStatus,
  getUsers,
  updatePassword,
};
