module.exports = (request, response, next) => {
    let canCreate = false;
    console.log(request.session.previlegios);
    for (let previlegio of request.session.previlegios) {
        if (previlegio.nombre == "ver personajes") {
            canCreate = true;
            next();
        }
    }
    if (!canCreate) {
        return response.status(403).send("Tus acciones han sido reportadas a las autoridades");    
    }
};