const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true,'Please provide username']
    },
    password: {
        type: String,
        required: [true,'Please provide password']
    }
});

UserSchema.plugin(uniqueValidator);

//encrypt assword before saving user in DB

UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

//export model
const User = mongoose.model("User", UserSchema);
module.exports = User;