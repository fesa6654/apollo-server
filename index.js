const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
require('dotenv').config();

const typeDefs = require('./src/graphql/typeDefs/typeDefs');
const resolvers = require('./src/graphql/resolvers');
const routes = require('./routes');
const myErrorHandler = require('./errors');


const app = express();

app.use(cors())


async function startApolloServer() {

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({ req, res }) => {

      routes(req);

    },
    formatError: (err) => {

      return myErrorHandler.sendErrorContent();

    }
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" })


  /*if (cluster.isMaster) {
  
  for (let i = 0; i < 3; i++) {
    cluster.fork();
  }
  
  } else {*/

  app.listen({ port: 5000 }, () => {

    console.log("Server is Running on 5000 Port !");

  });

  //}

  return { server, app };
}

startApolloServer();
