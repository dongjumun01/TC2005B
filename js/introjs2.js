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
}


boton.onclick = poner_imagen_1; //con () al abrir la ventana va a aparecer
// la imagen
