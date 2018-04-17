const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//load collection in mongoose so we can make a model class
//loads schema into mongoose 
mongoose.model('users', userSchema);
