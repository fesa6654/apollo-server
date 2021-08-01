const { v4: uuidv4 } = require('uuid');

const db = require("../../database/database");


class ErrorLogger {

  saveApiError(data) {

    return new Promise((resolve, reject) => {

      db("api_logs").insert({ id: uuidv4(), path: data.path, content: data.content.toString().substring(0, 249), explanation: data.explanation, createdAt: new Date() }).then(() => {

        resolve()

      }).catch(err => {

        reject()

      })
    })

  }

}

const errorLogger = new ErrorLogger();

module.exports = errorLogger;