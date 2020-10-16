import {ApolloServer, gql} from "apollo-server-express";
import typeDefs from "./typeDefs/index.ts";
//import resolvers from "./resolvers";
import session from "express-session";
const express = require("express");
import mongoose from "mongoose";
import { APP_PORT, IN_PROD, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME} from "./config.ts";


// mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
(async () => {
    try {
        await mongoose.connect(
            //`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
            `mongodb://it2810-70.idi.ntnu.no:27017/prosjekt3db?readPreference=primary&appname=MongoDB%20Compass&ssl=false`,
            { useNewUrlParser: true } // fikser advarsel om deprecated url string parser
        )
        //url skal være it2810-70.idi.ntnu.no

        const app = express();

        //app.disable("x-powered-by");


        const server = new ApolloServer({
            typeDefs, playground: true, introspection: true
        });

        server.applyMiddleware({app});

        app.listen({ port: APP_PORT}, () =>
            console.log(`server is running at http://localhost:${APP_PORT}`)
        )
    } catch (e){
        console.error(e);
    }


})()



