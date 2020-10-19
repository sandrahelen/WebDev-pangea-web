import {Country} from "../models/index.ts";

export default {
    Query: {
        country: (root, args, context, info) => {

            return Country.find({})
        }

    }
}