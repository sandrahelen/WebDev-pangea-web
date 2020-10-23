import mongoose, { Schema } from "mongoose";

const userCountriesSchema = new mongoose.Schema({
    name: String,
    visitedAt: String,
    user: {
        type: Schema.ObjectId,
        ref: "User"
    },
    countries: [{
        type: Schema.ObjectId,
        ref: "Country"

    }]
}, {
    timestamps: true
});

export const UserCoutries =  mongoose.model("UserCountries", userCountriesSchema);