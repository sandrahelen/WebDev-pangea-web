import {ApolloServer, gql} from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
const express = require("express");

const{
    PORT = 4000,
    NODE_ENV = "development"
} = process.env

const IN_PROD = NODE_ENV === "production";
const app = express();

app.disable("x-powered-by");

const server = new ApolloServer({
    typeDefs, resolvers, playground: !IN_PROD
});

server.applyMiddleware({app});

app.listen({ port: PORT}, () =>
    console.log(`server is running at http://localhost:${PORT}`)
)
