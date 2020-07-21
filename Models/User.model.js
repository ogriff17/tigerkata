const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email:{type:String, required: true, unique: true, trim: true, minlength: 3},
    password: {type:String, required: true, unique: false, trim: true, minlength: 3},
    name: {type:String, required: false, unique: false, trim: true, minlength: 5},
    age:{type:Number, required: false, unique: false, trim: true, minlength: 2},
    weight:{type:Number, required: false, unique: false, trim: true, minlength: 2},
    height:{type:Number, required: false, unique: false, trim: true, minlength: 2},
    gender:{type:String, required: false, unique: false, trim: true, minlength: 1},
    experience:{type:Number, required: false, unique: false, trim: true, minlength: 2},
    experienceLevel:{type:String, required: false, unique: false, trim: true},
    trainingHours:{type:Number, required:false, unique:false, trim:true, minlength:1},
    style:{type:String, required:false, unique:false, trim:true, minlength:1},
    weightClass:{type:String, required:false, unique:false, trim: true},
    ageGroup: {type:String, required:false, unique:false, trim: true}
}, {
    timestamps: true,
});
const User = mongoose.model('User', userSchema);

module.exports = User;