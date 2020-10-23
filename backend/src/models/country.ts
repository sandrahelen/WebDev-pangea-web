import mongoose, { Schema } from "mongoose";

const countrySchema = new mongoose.Schema({
    name: String,
    continent: String,
    capitol: String,
    nationalDish: String
}, {
    timestamps: true
});

export const Country = mongoose.model("Country", countrySchema);