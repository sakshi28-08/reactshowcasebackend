const mongoose = require('mongoose');
const db_name = "ReactComponentShowcase";

const url = `mongodb+srv://Sakshi:9569018235@cluster0.43pkkjl.mongodb.net/${db_name}?retryWrites=true&w=majority`;
//it will return promise
mongoose.connect(url)
.then((data) => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
});


module.exports=mongoose;