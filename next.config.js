require('dotenv').config();
const withImages = require('next-images')

module.exports = {
    env: {
        FOOD_DB_KEY: process.env.FOOD_DB_KEY,
        PORT: process.env.PORT || 3000,
        GA_ID: process.env.GA_ID
    },
  }


  module.exports = withImages()