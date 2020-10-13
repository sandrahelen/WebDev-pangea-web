import mongoose, { Schema } from "mongoose";

const userCountriesSchema = new Schema({
    name: String!,
    visitedAt: String,
    users: [{
        type: Schema.Type.ObjectId,
        ref: "User"
    }],
    countries: [{
        type: Schema.Type.ObjectId,
        ref: "Country"

    }]
}, {
    timestamps: true
});

export default mongoose.model("UserCountries", userCountriesSchema);