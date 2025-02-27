//modificar html

const boton = document.getElementById("boton_imagen");
console.log(boton);

const poner_imagen_1 = () => {
    //console.log("click");
    const span_imagen = document.getElementById("imagen_chewy");
    //console.log(span_imagen);
    span_imagen.innerHTML = `<img alt="imagen de chewbacca"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgVp24TlNmDm2CaFYbBHLT0tAWoIRrUJPujBnNieQANku2V2XtR8kRLmyhn-_B-gxZmSNHHONU3XKwaj8-1HowsVWn-I3fmP3-7TPVoXKWra36PRJQGwr4lvukjNRARDlVw2dB30um6TFP/s1600/movies_star_wars_bts_pics_13.jpg"
    >`;
    boton.onclick = poner_imagen_2;
}

const poner_imagen_2 = () => {
    //console.log("click");
    const span_imagen = document.getElementById("imagen_grogu");
    //console.log(span_imagen);
    span_imagen.innerHTML = `<img alt="imagen de grogu"
        src="https://img.asmedia.epimg.net/resizer/v2/5R5YEWQFQBLWVJWENOTRYZNKDA.jpg?auth=7c986554cbbfa8dc1514c5b76fa896e115250a7ea9249a371003351ec14000f8&width=1472&height=828&smart=true"
    >`;
    boton.onclick = poner_imagen_3;
}

const poner_imagen_3 = () => {
    //console.log("click");
    const span_imagen = document.getElementById("imagen_r2d2");
    //console.log(span_imagen);
    span_imagen.innerHTML = `<img alt="imagen de r2d2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkg-0k_ZF3CbjktnIQ2UGEifssNauyR9V9Q&s"
    >`;
    boton.onclick = poner_imagen_4;
}

const poner_imagen_4 = () => {
    //console.log("click");
    const span_imagen = document.getElementById("imagen_3po");
    //console.log(span_imagen);
    span_imagen.innerHTML = `<img alt="imagen de 3po"
        src="https://static.wikia.nocookie.net/esstarwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png/revision/latest?cb=20200718062140"
    >`;
    //boton.onclick = poner_imagen_4;
}




boton.onclick = poner_imagen_1; //con () al abrir la ventana va a aparecer
// la imagen. Esta accion le dice a la pagina que corra la funcion 
// inmediatamente
