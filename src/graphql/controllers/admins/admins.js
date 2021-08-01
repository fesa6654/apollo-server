const db = require("../../../../database/database");
const myErrorHandler = require("../../../../errors");
const errorLogger = require("../../../errorLogger/index");


exports.getAllAdmins = () => {

  return (
    db('admins').column('id', 'name', 'username', 'createdAt').select().from('admins').then(data => {

      return data;

    }).catch(err => {

      return errorLogger.saveApiError({ path: "/admin", content: err, explanation: "getAllAdmins İsteğinde Hata Oluştu !" }).then(() => {

        return myErrorHandler.setErrorContents(400, "There is an error in this request !")

      }).catch(() => {

        return myErrorHandler.setErrorContents(400, "There is an error in this request !")

      })

    })
  )
}