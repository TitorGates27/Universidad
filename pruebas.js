let nombre = "Juan";
let edad = 30;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

function sumar(a, b) {
    return a + b;
}
console.log(`La suma de 5 y 3 es: ${sumar(5, 3)}`);

let frutas = ["manzana", "banana", "cereza"];
frutas.forEach(fruta => {
    console.log(`Me gusta la ${fruta}`);
});

let persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};
persona.saludar();
