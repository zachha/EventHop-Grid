

exports.homePage = async (req, res) => {
    res.render('index', { title: 'Main'});
};

exports.contactPage = (req, res) => {
    res.render('contact', { title: 'Contact' });
};

exports.createPage = (req, res) => {
    res.render('create', { title: 'Create' });
};