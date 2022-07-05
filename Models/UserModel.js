const {Schema, model} = require("../connection");

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    components: Array,
    createdAt: Date,
     
});

module.exports = model("users",schema);