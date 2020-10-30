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
        countries: async (obj, {filter, search, skip}, context, info) => {
            try {
                if (filter === " ") {
                    if (search === " ") {
                        return Country.find().skip(skip).limit(10).exec()
                    }
                    /*if (sort === "true") {
                        return Country.find({country: /^A/}).sort({continent: 1})
                    }*/
                    return Country.find({country: new RegExp(search)})
                }
                return Country.find({continent: filter})
            } catch (e) {
                console.log(e);
                return [];
            }
        },
        getVisitedCountries: async (root, {username}, context, info) => {
            try {
                return await Country.find({
                   "users": {$all: [username]}
                })
            } catch (e) {
                throw e;
            }
        },
        getVisitors: async (root, {country}, context, info) => {
            try{
                const countr = await Country.findOne({country: country})
                return countr.users;
            } catch (e) {
                throw e;
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