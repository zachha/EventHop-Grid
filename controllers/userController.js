const promisify = require('es6-promisify');

exports.loginForm = (req, res) => {
    res.render('login', { title: 'Login' });
}

exports.registerForm = (req, res) => {
    res.render('register', { title: 'Register' });
}

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'You must supply a username!').notEmpty();
    req.checkBody('email', 'That Email is not valid!').notEmpty();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
    req.checkBody('password2', 'Confirmed Password cannot be blank!').notEmpty();
    req.checkBody('password2', 'Whoops! Your Passwords do not Match').equals(req.body.password);

    const form = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
    }

    const errors = req.validationErrors();
    if (errors) {
        req.flash('error', errors.map(err => err.msg ));
        res.render('register', { title: 'Register', form, flashes: req.flash() });
        return; // stops the function from running
    }
    next() // if no errors then continue!
};

exports.register = (req, res) => {
    console.log(req.body);
    res.render('register', { title: 'Register', form: req.body});
}
