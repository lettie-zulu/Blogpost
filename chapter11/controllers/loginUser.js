const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    // we assign the user id to the session
                    // the session package saves this data on the user's browser so that each time the user 
                    // makes a request, this cookie will be sent back to the server with the authenticated id
                    req.session.userId = user._id;
                    return res.redirect('/');
                }
                else {
                    console.log(error);
                    res.redirect('/auth/login');
                }
            });
        }
        else {
            console.log(error);
            res.redirect('/auth/login');
        }
    });
}