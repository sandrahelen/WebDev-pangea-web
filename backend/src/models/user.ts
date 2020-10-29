import mongoose, { Schema } from "mongoose"
import {countrySchema} from "./country.ts";

const userSchema = new mongoose.Schema({
    username: String,
    loggedIn: Boolean,
    userCountries: [countrySchema]
}, {
    collection: 'user'
});

export const User = mongoose.model('user', userSchema);