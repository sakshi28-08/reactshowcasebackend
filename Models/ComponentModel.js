const {Schema, model} = require("../connection");

const schema = new Schema({
    title: String,
    description: String,
    thumbnail: String,
    code: String,
    likes:{type : Number, default : 0},
    comments:{type : Array, default : []},
    createdAt: Date,
     
});

module.exports = model("users",schema);