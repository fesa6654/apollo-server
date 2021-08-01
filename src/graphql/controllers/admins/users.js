const db = require("../../../../database/database");
const myErrorHandler = require("../../../../errors");
const errorLogger = require("../../../errorLogger/index");


exports.getAllUsers = () => {

  return (
    db('users').column('id', 'name', 'username', 'createdAt').select().from('users').then(data => {

      return data;

    }).catch(err => {

      return errorLogger.saveApiError({ path: "/user", content: err, explanation: "getAllUsers İsteğinde Hata Oluştu !" }).then(() => {

        return myErrorHandler.setErrorContents(400, "There is an error in this request !")

      }).catch(() => {

        return myErrorHandler.setErrorContents(400, "There is an error in this request !")

      })

    })
  )
}