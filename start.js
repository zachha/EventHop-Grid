
// import environmental variables from .env file
require('dotenv').config({ path: '.env' });
const app = require('./app');
app.set('PORT' = process.env.PORT || 8080);

// import all models for sql database 
const db = require('./models');
const User = require('./models/User');
const Group = require('./models/Groups');


const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT " + PORT ${server.address().port}`);
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