const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connect to the database.");    
}).catch(err => {
    console.log('Not connect to the database.'+ err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "API OK."});
});

require('./src/routes/curse.js')(app);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});