const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_login = (req, res, nxt) => {
    res.render('login.ejs', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        isNew: false,
        csrfToken: req.csrfToken(),
    });
};

exports.post_login = (req, res, nxt) => {
    Usuario.fetchOne(req.body.username).then(([rows, fieldData]) => {
        if (rows.length > 0) {
            bcrypt.compare(req.body.password, rows[0].password)
            .then((doMatch) => {
                if (doMatch) {
                    req.session.username = rows[0].username;
                    req.session.isLoggedIn = true;
                    return req.session.save(err => {
                        res.redirect('/personajes');
                    })
                } else {
                    res.redirect('/users/login');
                }
            }).catch((error) => {
                console.log(error);
            })
        } else {
            res.redirect('/users/login');
        }
    }).catch((error) => {
        console.log(error);
    })
};

exports.get_logout = (req, res, nxt) => {
    req.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        res.redirect('/users/login');
    });
};

exports.get_signup = (req, res, nxt) => {
    res.render('login.ejs', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        isNew: true,
        csrfToken: req.csrfToken(),
    });
};

exports.post_signup = (req, res, nxt) => {
    const nuevo_usuario = new 
        Usuario (req.body.username, req.body.password);

    nuevo_usuario.save().then( () => {
        res.redirect('/users/login');
    }
    ).catch((error) => {
        console.log(error);
    });
};
