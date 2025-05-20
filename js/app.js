class Persona{
    constructor(nombre, edad,dni, sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }
    mostrarGeneracion(){
      console.log("Desde mostrar generacion")
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
    alert(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es ${rasgo}.`)
    }

    esMayorDeEdad(){
        if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad.`);
    } else {
      alert(`${this.nombre} NO es mayor de edad.`);
    }
    }
    mostrarDatos(){
     alert(`
      Nombre: ${this.nombre}
      Edad: ${this.edad}
      DNI: ${this.dni}
      Sexo: ${this.sexo}
      Peso: ${this.peso} kg
      Altura: ${this.altura} cm
      Año de nacimiento: ${this.anioNacimiento}
    `);
    }
}
//guardar los datos de la persona creada
let personaCargada=null;

function cargarDatosFormulario(e){
  e.preventDefault();
  //guardar los datos llenados del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo");
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value)

  //crear objeto persona
  personaCargada=new Persona(nombre, edad,dni,sexo,peso,altura, anioNacimiento)
  formulario.reset()
}

//manejador de eventos para el form
const formulario=document.querySelector("form")
const btnMostrarGeneracion=document.querySelector(".btn-outline-info")
const btnMayorDeEdad=document.querySelector(".btn-outline-primary")
const btnMostrarDatos=document.querySelector(".btn-outline-danger")


formulario.addEventListener("submit",cargarDatosFormulario)
//manejador de eventos de los botones
btnMostrarGeneracion.addEventListener("click",function(){
  if (personaCargada){
    personaCargada.mostrarGeneracion()
  }else {
    alert("Primero debes crear una persona")
  }
})

btnMayorDeEdad.addEventListener("click",function(){
  if (personaCargada){
    personaCargada.esMayorDeEdad()
  }else {
    alert("Primero debes crear una persona")
  }
})

btnMostrarDatos.addEventListener("click",function(){
  if (personaCargada){
    personaCargada.mostrarDatos()
  }else {
    alert("Primero debes crear una persona")
  }
})