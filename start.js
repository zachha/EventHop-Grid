
// import environmental variables from .env file
require('dotenv').config({ path: '.env' });
const PORT = process.env.PORT || 8080;
// import all models for sql database 
const db = require('./models');

// syncs the database and starts the server
db.sequelize.sync().then(function () {
    http.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});