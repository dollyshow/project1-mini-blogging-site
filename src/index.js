const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/*----------------------------------------------------------------------
🗃️ connect mongo db
----------------------------------------------------------------------*/
mongoose.connect("mongodb+srv://Dolly:bItSeBHGVNhDvyLQ@cluster0.i112s.mongodb.net/project1?authSource=admin&replicaSet=atlas-hffzw2-shard-0&readPreference=primary&ssl=true", {
        useNewUrlParser: true
    })
    .then((result) => console.log("MongoDb is connected"))
    .catch((err) => console.log(err))


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});