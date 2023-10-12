module.exports = (req, res) => {
    // destroy all session data including the session user id
    req.session.destroy(() => {
        res.redirect('/')
    })
}