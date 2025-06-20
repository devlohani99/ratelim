const crypto = require('crypto');

function generateRandomString(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

module.exports = { generateRandomString }; 