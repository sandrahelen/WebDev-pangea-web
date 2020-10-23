import {User} from "../models/user.ts";

export default {
    Query: {
        user: async (obj, {id}, context, info) => {
            console.log(id)
           try {
              return await User.findById(id);
           } catch (e) {
               console.log(e);
               return {};
           }
  },
        users: async () => {
            try {
                return User.find()
            } catch (e) {
                console.log(e);
                return [];
            }
        }
    },
    Mutation: {
        signUp: async (root, {}, context, info) => {
        try {
            const newUser = await User.create({
                ...User,
            });

            return User.find();
        } catch (e){
            console.log(e)
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



