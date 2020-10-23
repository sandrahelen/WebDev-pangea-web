import {User} from "../models/user.ts";

export default {
    Query: {
        user: async (obj, {_id}, context, info) => {
           try {
              return await User.findById(_id);
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



