const db = require('../util/database');

module.exports = class Personaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_nivel) {
        this.nombre = mi_nombre;
        this.id_fuerza = mi_nivel;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO personajes(nombre, id_fuerza) VALUES (?, ?)', 
            [this.nombre, this.id_fuerza]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute(`
            SELECT * 
            FROM personajes p, fuerza f
            WHERE p.id_fuerza=f.id
            `);
    }

    static fetchOne(id) {
        return db.execute(`
            SELECT * 
            FROM personajes p, fuerza f
            WHERE p.id_fuerza=f.id AND id=?`, 
            [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

}