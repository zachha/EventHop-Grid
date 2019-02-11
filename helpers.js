const fs = require('fs');

// moment.js library for displaying times and dates and integrating them into posts
exports.moment = require('moment');

// Dump used to debug or 'console.log' our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// helper function to build our static google map so we don't have to keep writing the code in our js
// exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// details about site
exports.siteName = `EventHop`;
