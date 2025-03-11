module.exports = (request, response, next) => {
    console.log(request.session.previlegios);
    let canCreate = false;
    for (let previlegio of request.session.previlegios) {
        if (previlegio.nombre == "crear personajes") {
            console.log("next middleware crear personaje");
            canCreate = true;
            next();
        }
    }
    if (!canCreate) {
        return response.status(403).send("Tus acciones han sido reportadas a las autoridades");    
    }
};