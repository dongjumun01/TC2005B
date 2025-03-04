exports.get_login = (req, res, nxt) => {
    res.render('login.ejs');
};

exports.post_login = (req, res, nxt) => {
    res.redirect('/personajes');
};