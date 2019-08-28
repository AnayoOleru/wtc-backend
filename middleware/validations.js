/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
const joi = require('joi');
const locationSchema = require('../helpers/schemas/location');
const userSchema = require('../helpers/schemas/user');
const statusHandler = require('../helpers/statusHandler');

const validate = (value, scheme, res, next) => {
  joi.validate(
    value,
    scheme,
    { abortEarly: false, stripUnknown: true },
    err => {
      if (err) {
        const errMsg = [];
        for (let i = 0; i < err.details.length; i++) {
          errMsg.push(err.details[i].message);
        }
        return statusHandler(res, 400, errMsg);
      }
      next();
    },
  );
};
const validateQuery = (req, res, next) => {
  return validate(req.query, locationSchema.querySchema, res, next);
};
const validateId = (req, res, next) => {
  return validate(req.params, locationSchema.queryId, res, next);
};
const validateLogin = (req, res, next) => {
  return validate(req.params, userSchema.queryLogin, res, next);
};

module.exports = {
  validateQuery,
  validateId,
  validateLogin,
};
