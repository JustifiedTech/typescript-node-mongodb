import { Schema, model, Document } from "mongoose";

// export interface IScore extends Document {
//     name: string;
//     // 'score': number;
// }

const stringNull = {
    type: String,
    default: null,
};
const string = {
    type: String
}
export const userSchema = new Schema(
    {
        firstName: string,
        lastName: string,
        sex: {
            type: String,
            enum: ["female", "male"],
        },
        phone: { type: String, unique: true },
        password: { type: String, select: false, default:12345 },
        profileImage: stringNull,
      
    },
    { timestamps: true }
);

// export const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   score: { type: String, required: true }
// });

// const User = mongoose.model<IUser>("User", UserSchema);
export const User = model("users", userSchema);
// export default User;
