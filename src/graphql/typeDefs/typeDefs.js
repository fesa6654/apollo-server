const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {

  #Admins Requests
  
    admins: [admins!]!
    getSelectedAdmin(id: String!): admins!

  #Users Requests
   
    users: [users!]!
    getSelectedUser(id: String!): users!
  }

#----------------------------------------

  type Mutation {

  #General Requests

  login(data: login!): token!

  #Admin Requests

    newAdminRegister(data: newAdminRegister!): responseStatusMessages!

  #Users Requests

    newUserRegister(data: newUserRegister!): responseStatusMessages!
  }

#----------------------------------------

  #Types

  type admins {
    id: String!
    name: String!
    username: String!
    createdAt: String!
    updatedAt: String!
    deletedAt: String!
  }

  type users {
    id: String!
    name: String!
    username: String!
    createdAt: String!
    updatedAt: String!
    deletedAt: String!
  }

  type responseStatusMessages {
    correct: String!
    error: String!
  }

  type token {
    token: String!
  }

#----------------------------------------

  #İnputs

  input newAdminRegister {
    name: String!
    username: String!
    password: String!
  }

  input newUserRegister {
    name: String!
    username: String!
    password: String!
  }

  input login {
    username: String!
    password: String!
  }

  `;

module.exports = typeDefs;