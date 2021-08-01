class ErrorHandler {

  response = {
    statusCode: "",
    message: ""
  }

  setErrorContents(statusCode, errorMessage) {

    this.response.statusCode = statusCode;
    this.response.message = errorMessage;

    throw new Error("");

  }

  sendErrorContent() {

    return this.response;

  }

}

const myErrorHandler = new ErrorHandler();

module.exports = myErrorHandler;