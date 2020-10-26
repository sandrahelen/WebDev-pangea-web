import {User} from "../models/user.ts";

export default {
    Query: {
        user: async (obj, {username}, context, info) => {
            try {
                return await User.findOne({username: username});
            } catch (e) {
                console.log(e);
                return {};
            }
        },

        users: async () => {
            try {
                const allUsers = User.find()
                return allUsers
            } catch (e) {
                console.log(e);
                return [];
            }
        }
    },
    Mutation: {
        signUp: async (root, {username}, context, info) => {
            try {
                const newUser = await User.create({username: username, loggedIn: true});
                return newUser;
            } catch (e){
                console.log(e)
            }
        },

        signIn: async (root, {username}, context, info) => {
            try {
                const updatedUser = await User.update({username: username}, {loggedIn: true});
                return updatedUser;
            } catch (e){
                console.log(e)
            }
        },

        signOut: async (root, {username}, context, info) => {
            try {
                const updatedUser = await User.updateOne({username: username}, {loggedIn: false});
                return updatedUser;
            } catch (e){
                console.log(e)
            }
        }
    }
}
