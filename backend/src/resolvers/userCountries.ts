import {User, Country, UserCountries} from "../models/index.ts";

export default {
    Query: {
        userCountries: (root, args, context, info) => {

        },
        users: (root, args, context, info) => {

            return User.find({})
        },
        countries: (root, args, context, info) => {

            return Country.find({})
        }
    },
    Mutation: {
        addCountry: (root, args, context, info) => {

        }
    }
}
