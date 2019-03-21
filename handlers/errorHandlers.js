// catches errors encountered during async/await functions and passes along to express middleware using next()

exports.catchErrors = (fn) => {
    return function(req, res, next) {
        return fn(req, res, next).catch(next); 
    };
};

/* Not Found Error Handler

   If we hit a route that isn't found, it is marked as 404 and passed to the next error handler to display
*/
exports.notFound = (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
};

/*  MySQL Validation Error Handler

    Detects if there are mysql validation errors that can be shown to user via flash messages
*/
exports.flashValidationErrors = (err, req, res, next) => {
    if (!err.errors) return next(err);
    // validation errors look like
    const errorKeys = Object.keys(err.errors);
    errorKeys.forEach(key => req.flash('error', err.errors[key].message));
    res.redirect('back');
};

/* Development Error Handler

    In dev, shows the stack trace so we can pinpoint what happened more easily.
*/
exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status,
        stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>')
    };
    res.status(err.status || 500);
    res.format({
        // Based on the 'Accept' http header
        'text/html': () => {
            res.render('error', errorDetails);
        }, // Form Submit, Reload the page
        'application/json': () => res.json(errorDetails)
        // Ajax call, send JSON back
    });
};

/* Production Error Handler

    No stacktraces are leaked to user
*/
exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};
