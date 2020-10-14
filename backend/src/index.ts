
import {ApolloServer, gql} from "apollo-server-express";
import typeDefs from "./typeDefs";
//import resolvers from "./resolvers";
import session from "express-session";
const express = require("express");
import mongoose from "mongoose";
import { APP_PORT, IN_PROD, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME, SESS_LIFETIME, SESS_NAME, SESS_SECRET} from "./config";


// mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
(async () => {
    try {
        await mongoose.connect(
            `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
            { useNewUrlParser: true } // fikser advarsel om deprecated url string parser
        )
        //url skal være it2810-70.idi.ntnu.no

        const app = express();

        app.disable("x-powered-by");


        const server = new ApolloServer({
            typeDefs, playground: true
        });

        server.applyMiddleware({app});

        app.listen({ port: APP_PORT}, () =>
            console.log(`server is running at http://localhost:${APP_PORT}`)
        )
    } catch (e){
        console.error(e);
    }


})()




