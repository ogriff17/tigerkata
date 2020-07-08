const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema ({
    email:{type:String, required: true, unique: true, trim: true, minlength: 3},
    opponent: {type:String, required: true},
    matchLoc: {type:String, required: true},
    matchDate:{type:Date, required: true},
    winner:{type:String, required: false},
    
}, {
    timestamps: true,
});
const Match = mongoose.model('Match', matchSchema);

module.exports = Match;