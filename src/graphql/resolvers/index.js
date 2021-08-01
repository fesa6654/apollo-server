const admins = require("../../graphql/controllers/admins/admins");
const users = require("../../graphql/controllers/admins/users");

const resolvers = {
  Query: {
    admins: admins.getAllAdmins,
    users: users.getAllUsers,
    getSelectedUser: (parents, args) => {
      //{ id: '32423rwe' }
      return ({ name: "sefa", id: args.id })
    },
    getSelectedAdmin: (parents, args) => {
      //{ id: '32423rwe' }
      return ({ name: "sefa", id: args.id })
    }
  },
  Mutation: {
    newAdminRegister: (parents, args) => {
      /*
      {
        data: [Object: null prototype] {
        name: 'sefaff',
        username: 'sea.@asdf.com',
        password: 'sndşlf'
      }
      */
      return ({ correct: "döndü" })
    },
    newUserRegister: (parents, args) => {
      /*
      {
        data: [Object: null prototype] {
        name: 'sefaff',
        username: 'sea.@asdf.com',
        password: 'sndşlf'
      }
      */
      return ({ error: "döndü" })
    },
    login: (parents, args) => {
      /*
      {
        data: [Object: null prototype] {
        username: 'sea.@asdf.com',
        password: 'sndşlf'
        }
      }
      */
      return ({ token: "login oldu !" })
    }
  }
};

module.exports = resolvers;