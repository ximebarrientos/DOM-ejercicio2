class Persona{
    constructor(nombreParam, edadParam,sexoParam,pesoParam,alturaParam,anioNacimientoParam){
        this.nombre=nombreParam;
        this.edad=edadParam;
        this.dni=dniParam;
        this.sexo=sexoParam;
        this.peso=pesoParam;
        this.altura=alturaParam;
        this.anioNacimiento=anioNacimientoParam;
    }
    mostrarGeneracion(){
    let generacion=""
    let rasgo=""
    if(this.anioNacimiento>=1930 && this.anioNacimiento<=1948){
        generacion="Silent Generation: Los niños de la posguerra"
        rasgo="Austeridad"
    }else if (this.anioNacimiento>=1949 && this.anioNacimiento<=1968){
        generacion="Baby Boom"
        rasgo="Ambición"
    }else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else {
      generacion = "Desconocida";
      rasgo = "No disponible";
    }
    console.log(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es ${rasgo}.`)
    }

    esMayorDeEdad(){
        if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} NO es mayor de edad.`);
    }
    }
    mostrarDatos(){
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso} kg`);
    console.log(`Altura: ${this.altura} m`);
    console.log(`Año de nacimiento: ${this.anioNacimiento}`)
    }
}

document.getElementById