const jwt = require('jsonwebtoken');
require('dotenv').config();

const myErrorHandler = require('../../errors');


module.exports = (data) => {

  try {

    const token = data.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    return;

  } catch (error) {

    return myErrorHandler.setErrorContents(401, "Invalid Token !")

  }
}