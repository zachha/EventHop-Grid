
// import environmental variables from .env file
require('dotenv').config({ path: '.env' });
const app = require('./app');


// import all models for sql database 
//const db = require('./models');
//const User = require('./models/User');
//const Group = require('./models/Groups');

app.set("port", process.env.PORT || 8080);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

/*
// syncs the database and starts the server
// db.sequelize.sync().then(function () {});
User.sync()
.then(function () {
    Group.sync()
    .then(function () {
        const server = app.listen(app.get('port'), () => {
                console.log(`Express running → PORT " + PORT ${server.address().port}`);
        });
    });
});
*/