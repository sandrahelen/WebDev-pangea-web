import {Country} from "../models/country.ts";

export default {
    Query: {
        country: async (obj, {_id}, context, info) => {
           try {
              return await Country.findById(_id);
           } catch (e) {
               console.log(e);
               return {};
           }
        },
        countries: async () => {
            try {
                const allCountries = Country.find()
                return allCountries
            } catch (e) {
                console.log(e);
                return [];
            }
        }
    }
}