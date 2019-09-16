const express = require('express');
const reviews = require('./reviewController');
const validate = require('../middleware/validations');

const router = express.Router();

router.post(
  '/locations/:id/review',
  validate.validateId,
  validate.validateReviewInput,
  reviews.addReview,
  reviews.addReview
);

module.exports = router;
