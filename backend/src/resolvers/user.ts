import { User } from "../models/index.ts";
import mongoose from "mongoose";

export default {
    Query: {
        user(obj, args, context, info) {
            return context.db.User.find(user => user.username === args.username)
  },
        users: (parent, args, context) => {
             return null
        }
    },
    Mutation: {
        signUp: async (root, {username}, context, info) => {
        //TODO: not auth, validation
        if (User.find({'username': username}) === null) {
            await User.create(username)
            //User.findByIdAndUpdate(id).loggedIn = true
            return await User.find({'username': username})
            }
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



