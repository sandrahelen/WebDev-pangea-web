import mongoose, { Schema } from "mongoose";

const countrySchema = new mongoose.Schema({
    country: String,
    continent: String,
    city: String,
    dish: String
}, {
    //timestamps: true
    collection: 'land'
});

export const Country = mongoose.model("land", countrySchema);