exports.get_login = (req, res, nxt) => {
    res.render('login.ejs', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};

exports.post_login = (req, res, nxt) => {
    req.session.username = req.body.username;
    req.session.isLoggedIn = true;
    res.redirect('/personajes');
};

exports.get_logout = (req, res, nxt) => {
    req.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        res.redirect('/users/login')
    });
};