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
        countries: async (obj, {filter, search}, context, info) => {
            try {
                if (filter === " ") {
                    if (search === " ") {
                        return Country.find()
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
        }
    }
}