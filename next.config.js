require('dotenv').config();

module.exports = {
    env: {
        FOOD_DB_KEY: process.env.FOOD_DB_KEY,
        PORT: process.env.PORT || 3000
    },
  }