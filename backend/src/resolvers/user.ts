import { User } from "../models/index.ts";
import mongoose from "mongoose";
import { UserInputError } from "apollo-server-express";
import Joi from "joi";
//import { signUp } from "../schemas/index.ts";


export default {
    Query: {
    users: (parent, args, context) => {
         return mongoose.models.User.find();
    }
    },
    Mutation: {
        signUp: async (root, {username}, context, info) => {
        //TODO: not auth, validation
        //await Joi.validate(username, signUp)
        /*if (User.findById(id) === null) {*/
            User.create(username)
            //User.findByIdAndUpdate(id).loggedIn = true
            User.find({'username': username})
            return User.find({'username': username})
            //}
        },
        signIn: async (root, {username}, context, info) => {
            if (User.findById(username) !== null) {
                User.findById(username).loggedIn = true
                return User.findById(username)
            }
        },
        signOut: async (root, {username}, context, info) => {
            if (User.findById(username).loggedIn === true) {
                User.findById(username).loggedIn = false
            }
            return User.findById(username).loggedIn
        }
    }
}



