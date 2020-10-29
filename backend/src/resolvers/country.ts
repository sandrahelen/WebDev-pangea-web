import {Country} from "../models/country.ts";

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
        countries: async (obj, {filter}, context, info) => {
            try {
                if (filter === " ") {
                    return Country.find()
                }
                return Country.find({continent: filter})
            } catch (e) {
                console.log(e);
                return [];
            }
        }
    }
}