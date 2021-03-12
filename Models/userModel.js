const mongoose = require("mongoose");
const bcrypt=require("bcrypt")

const userSchema = new mongoose.Schema({
  firstName:{
  type:String,
  default:''
  },
  lastName:{
    type:String,
    default:'',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});
userSchema.methods.generateHash=function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}
userSchema.methods.validPassword=function(password){
  return bcrypt.hashSync(password,this.password);
}

module.exports = User = mongoose.model("user", userSchema);
