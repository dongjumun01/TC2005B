const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    // Constructor de la clase. Sirve para crear un nuevo objeto, 
    // y en él se definen las propiedades del modelo
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }

    // Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //personajes.push(this);
        //.then(): solo si la promesa cumplio. es como try
        // .catch: solo si la promesa fallo. es como catch
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO usuarios(username, password) VALUES(?, ?)', 
                [this.username, password_cifrado]
            );
        }).catch((error) => {
            console.log(error);
        });

    }

    // Este método servirá para devolver los objetos del almacenamiento 
    // persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username=?', [username]);
    }

    static fetch(username) {
        if (username) {
            return this.fetchOne(username);
        } else {
            return this.fetchAll();
        }
    }

    static getPrevilegios(username) {
        return db.execute(
            `SELECT p.nombre FROM previlegios p, rol_previlegio rp, roles r, 
            usuario_rol ur, usuarios u 
            WHERE p.id = rp.id_previlegio AND 
            rp.id_rol = r.id AND r.id = ur.id_rol AND 
            ur.id_usuario = u.id AND u.username = ?`,
            [username]
        );
    }
}

