import mongoose, { Schema } from "mongoose";

const userCountriesSchema = new Schema({
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

export default mongoose.model("UserCountries", userCountriesSchema);