const myErrorHandler = require("./errors.js");
const adminAuthorization = require("./src/authorization/index.js")


module.exports = (req, res) => {
  if (req.baseUrl === "/graphql") {

    adminAuthorization(req.headers.authorization);

  } else {

    myErrorHandler.setErrorContents(400, "Invalid Request !")

  }
}