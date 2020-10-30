import {Country} from "../models/country.ts";
import {User} from "../models/user.ts";

export default {
    Query: {
        country: async (obj, {country}, context, info) => {
           try {
              return await Country.findOne({country: country});
           } catch (e) {
               console.log(e);
               return {};
           }
        },
        countries: async () => {
            try {
                return Country.find()
            } catch (e) {
                console.log(e);
                return [];
            }
        },
        getVisitedCountries: async (root, {username}, contect, info) => {
            try {
                return await Country.find({
                   "users": {$all: [username]}
                })
            } catch (e) {

            }
        }
    },
    Mutation: {
        addVisitor: async (root, {username, country}, contecxt, info) => {
            try {
                const countr = await Country.findOne({country: country});
                const user = await User.findOne({username: username})
                await countr.users.push(user.username);
                countr.save();
                return countr;
            } catch (e) {
                throw e;
            }

        }
    }
}