// validates input from user
// if input fields are empty, redirect to /posts/new
module.exports = (req, res, next) => {
    if (req.files == null || req.body.title == null) {
        return res.redirect('/posts/new');
    }
    next();
}