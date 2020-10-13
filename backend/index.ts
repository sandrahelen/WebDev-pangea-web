//import "./src";

import {ApolloServer, gql} from "apollo-server-express";
//import typeDefs from "./src/typeDefs";
//import resolvers from "./src/resolvers";
const express = require("express");
import mongoose from "mongoose";
//import { APP_PORT, IN_PROD, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME, SESS_LIFETIME, SESS_NAME, SESS_SECRET} from "./config";


//mongoose.connect("mongodb://it2810-70.idi.ntnu.no:27017/prosjekt3db")
(async () => {
    try {
        await mongoose.connect(
            "mongodb://it2810-70.idi.ntnu.no:27017/prosjekt3db",
            { useNewUrlParser: true } // fikser advarsel om deprecated url string parser
        )
        //url skal være it2810-70.idi.ntnu.no

        const app = express();

        app.disable("x-powered-by");


        //const server = new ApolloServer();

        //server.applyMiddleware({app});

        app.listen({ port: 4000}, () =>
            console.log(`server is running at http://localhost:4000`)
        )
    } catch (e){
        console.error(e);
    }


})()