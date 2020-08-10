/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre = "";
	let peso = 0;
	let sexo = "";
	let edad = 0;
	let cantMujeres  = 0;
	let pesoHombre   = 0;
	let edadTotal    = 0;
	let edadPromeido = 0;
	for (let index = 0; index < 5; index++) {
		nombre = prompt("Ingrese nombre del paciente:");
		edad   = parseInt(prompt("Ingresar edad del paciente:"));
		sexo   = prompt("Ingresar sexo del paciente(H-hombre/M-Mujer/O-Otro):").substring(0,1).toLocaleUpperCase();
		peso   = parseFloat(prompt("Ingresar peso del paciente:"));
		if (sexo === "M") {
			cantMujeres++;
		}
		if (peso > pesoHombre && sexo === "H") {
			pesoHombre = peso;
		}
		edadTotal += edad;
	}
	edadPromeido = edadTotal / 5;
	document.writeln("La cantidad de mujeres ingresadas es: " + cantMujeres + "</br>");
	document.writeln("El hombre más pesado pesa: " + pesoHombre + "</br>");
	document.writeln("La edad promedio de los pacientes es: " + edadPromeido);
}
