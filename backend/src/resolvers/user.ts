/*
import { User } from "../models";
import mongoose from "mongoose";
import { UserInputError } from "apollo-server-express";
import Joi from "joi";
import { signUp } from "../schemas";


export default {
    Query: {
        users: (root, args, context, infor) => {
            //TODO: auth, projection, pagination
        return User.find({})
        },
        user: (root, {id}, context, infor) => {
            //TODO: auth, projection, sanitization
            if (!mongoose.Type.ObjectId.isValid(id)){
                throw new UserInputError(`${id} is not a valid user ID`);
            }
            return User.findById(id);
        }

    },
    Mutation: {
        signUp: async (root, args, context, infor) => {
        //TODO: not auth, validation
        await Joi.validate(args, signUp)
            return User.create(args)
        }
    }
}



 */
