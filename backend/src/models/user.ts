import mongoose, { Schema } from "mongoose"
import {countrySchema} from "./country.ts";

const userSchema = new mongoose.Schema({
    username: String,
    loggedIn: Boolean,
    userCountries: [String]
}, {
    collection: 'user'
});

export const User = mongoose.model('user', userSchema);