const fs = require('fs');

exports.homePage = async (req, res) => {
    res.render('index', { title: 'Main'});
};

exports.contactPage = (req, res) => {
    res.render('contact', { title: 'Contact' });
};

exports.createPage = (req, res) => {
    res.render('create', { title: 'Create' });
};

exports.eventsPage = (req, res) => {
    res.render('events', { title: 'Events' });
}

exports.getEventBySlug = async (req, res, next) => {
    // TESTING EVENTS BEFORE DATABASE IS HOOKED UP DELETE BEFORE DEPLOYMENT
    const events = JSON.parse(fs.readFileSync('./data/eventdata.json', 'utf-8'));
    const chosen =  await events.filter(event => event.slug == req.params.slug);
    const event = chosen[0];
    console.log(event);
    if (!event) {
        return next();
    }
    // TESTING

    res.render('event', { event, title: event.name } );
}
