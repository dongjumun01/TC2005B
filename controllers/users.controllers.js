exports.get_login = (req, res, nxt) => {
    res.render('login.ejs');
};

exports.post_login = (req, res, nxt) => {
    req.session.username = req.body.username;
    res.redirect('/personajes');
};