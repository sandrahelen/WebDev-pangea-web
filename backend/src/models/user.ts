import mongoose, { Schema } from "mongoose"
// import { hash } from "bcryptjs";

const userSchema = new Schema({
    username: String,
    countries: [{
        type: Schema.Types.ObjectId,
        ref: "country"
    }],
    loggedIn: Boolean
}, {
    timestamps: true
});
/*
userSchema.pre("save", async function (){
    if (this.isModified("password")){
        this.password = await hash(this.password, 10);
    }
})

 */

export default mongoose.model("User", userSchema);
//export const User = mongoose.model('User', userSchema);