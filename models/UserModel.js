var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  national_id: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  admin: { type: Boolean },
  gender: { type: String },
  update_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
