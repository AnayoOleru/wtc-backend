const db = require('../database/dbConfig');

const addReview = reviews => {
  return db('reviews')
    .returning('*')
    .insert(reviews);
};

const getReviewById = location_id =>
  db('reviews')
    .select('*')
    .from('reviews')
    .where({ location_id });

module.exports = { addReview, getReviewById };
