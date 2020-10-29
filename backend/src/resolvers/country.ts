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
        userCountries: async () => {
            try {
                return Country.find()
            } catch (e) {
                console.log(e);
                return [];
            }
        }
    }
}