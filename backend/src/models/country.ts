import mongoose, { Schema } from "mongoose";

const countrySchema = new Schema({
    name: String,
    continent: String,
    capitol: String,
    nationalDish: String
}, {
    timestamps: true
});

export default mongoose.model("Country", countrySchema);