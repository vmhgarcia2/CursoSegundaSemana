/* var aNumeros = [1, 2, 3, 4, 5, 6];
console.log(aNumeros[1000]);
console.log(new Date());
a = 5;
if (a > 2) {
        console.log('a es mayor que 2')
}

//Persona
var persona={
        Nombre:"Vero",
        Apellido:"Hernandez"
}

for (var p in persona){
        console.log(p);
        console.log(persona[p]);
}

for(var n of aNumeros){
        console.log(n);
}

aNumeros.forEach(n=>console.log(n));

function esPar(n) {
        return n % 2 == 0;
}

aNumeros.forEach(n => console.log(n + " => " + esPar(n)));

var esPar = function (n) {
        return n % 2 == 0;
}

esPar(2)

function media() {
        var media = 0;
        for (var n in arguments) {
                media += n;
        }
        media = media / arguments.length;
        return media;
}

//cada 2 segundos 5 veces
var i = 1;
let id = setInterval(() => {
        if (i >= 5) {
                clearInterval(id);
        }
        console.log("Hola")
        i++;
}, 2 * 1000)

var personas = [
        {
                nombre: "David",
                edad: 22
        },
        {
                nombre: "Steven",
                edad: 24
        },
        {
                nombre: "Miriam",
                edad: 19
        }
]

personas.sort((p1, p2) => {
        return p1.edad - p2.edad;
})

console.log(personas);
personas.sort();

console.log(personas);

var presentaciones = personas.map(p => `Hola, soy ${p.nombre} y tengo ${p.edad}`)
console.log(presentaciones);

var personasConI = personas.filter(p => p.nombre.includes("i"));
console.log(personasConI);

var a="a";
var a="a";
let b="a";
console.log(a);  */

var pares = [2, 4, 6, 10];
var impares = [1, 3, 5];
var todos = [...pares, ...impares]
todos.sort((a, b) => a - b)
console.log(todos);

let [a, b, c, d] = pares;
console.log(a, b, c, d)

class msg{
        constructor(mensaje,hecha){
                this.mensaje=mensaje;
                this.hecha=hecha;
        }

        marcarHecha(){
                this.hecha=true;
        }

}

let m=new msg("Hola", false);
console.log(m);
m.marcarHecha();
console.log(m);

