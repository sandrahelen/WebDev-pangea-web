import {User} from "../models/user.ts";
import {Country} from "../models/country.ts";

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
                return User.find()
            } catch (e) {
                console.log(e);
                return [];
            }
        },

        userCountries: async (root, {username}, context, info) => {
            try {
                //const user = await User.findOne({username: username}).exec();
                //return user.get('userCountries', Array)
                //return User.find({username: username}, {
                //    fields: {userCountries: 1},
                //}).fetch()
                //user.find()
                return await User.findOne({ username: username}, 'userCountries').exec();
                //return await user.aggregate([{$project: { username: username, country: { $arrayElemAt: ['$country.userCountries', 1]}}}])
            } catch (e) {
                throw e;
            }
        }
    },
    Mutation: {
        signUp: async (root, {username}, context, info) => {
            try {
                const user = await User.findOne({username: username});
                if(!user){
                    return User.create({username: username, loggedIn: true});
                } else {
                    throw new Error("kan ikke legge til bruker");
                }
            } catch (e){
                throw e;
            }
        },

        signIn: async (root, {username}, context, info) => {
            try {
                const user = await User.findOne({username: username});
                if(user){
                  await User.updateOne({ username: username}, {loggedIn: true})
                    return user
                } else {
                    throw new Error("Kan ikke logge inn bruker, brukernavnet finnes ikke fra før")
                }
            } catch (e){
                throw e;
            }
        },

        signOut: async (root, {username}, context, info) => {
            try {
                const user = await User.findOne({username: username});
                if(user){
                   await User.updateOne({ username: username}, {loggedIn: false})
                    return user.loggedIn;
                } else {
                    throw new Error("Kan ikke logge ut")
                }
            } catch (e){
                throw e;
            }
        },

        addCountry: async (root, {country, username}, context, info) => {
            try {
                const user = await User.findOne( { username: username } );
                const countr = await Country.findOne( { country: country });
                //console.log(user.countries);
                //for( let x in user.userCountries){
                //    if (x !== countr) {
                await user.userCountries.push(countr);
                 user.save();
                //    } else {
                //        throw new Error("Dette landet er lagret fra før")
                //    }
                //}
            } catch (e) {
                throw e;
            }
        }
    }
}




