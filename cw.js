let identificacion = {
    nombre:"María Cecilia",
    apellido:"Iannello",
    edad:"34",
    desc:"<ul class='apti'><li>Diseñadora Multimedial</li><li>Docente en TICs</li><li>Desarrolladora Web</li><li>Full Stack Python</li>"
}

document.getElementById("nombre").innerHTML = identificacion.nombre+ " "+identificacion.apellido ;
document.getElementById("info").innerHTML =identificacion.desc
