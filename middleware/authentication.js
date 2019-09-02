/* eslint-disable consistent-return */
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { getAUser } = require('../users/userModel');
const statusHandler = require('../helpers/statusHandler');

dotenv.config();
const verifyToken = async (req, res, next) => {
  const token = req.cookies.token || '';
  try {
    if (!token) {
      return statusHandler(res, 401, 'You need to Login');
    }
    const decrypt = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await getAUser(decrypt.id);
    if (!user) {
      return statusHandler(res, 403, 'Token Expired');
    }
    req.user = {
      id: decrypt.id,
      firstname: decrypt.firstname,
    };
    next();
  } catch (err) {
    return statusHandler(res, 500, 'Something Went Wrong');
  }
};

module.exports = verifyToken;
