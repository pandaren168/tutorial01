const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: true
    },
    password:{
        type: String,
        lowercase: true,
        required: true
    }
});

module.exports = mongoose.model("User", UserSchema);